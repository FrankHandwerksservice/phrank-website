<?php
// Kontaktformular: schickt die Anfrage per E-Mail an Philipp.
// Ohne JavaScript leitet es auf /danke/ weiter, mit JavaScript antwortet es mit JSON.

const EMPFAENGER = 'hello@phrank.io';
const ABSENDER = 'hello@phrank.io';

$istFetch = ($_SERVER['HTTP_ACCEPT'] ?? '') === 'application/json';

function antwort(int $status, string $weiter = ''): void
{
    global $istFetch;
    http_response_code($status);
    if ($istFetch) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $status < 400]);
    } elseif ($weiter !== '') {
        header('Location: ' . $weiter, true, 303);
    } else {
        header('Content-Type: text/plain; charset=utf-8');
        echo 'Das hat leider nicht geklappt. Schreib mir gern direkt an ' . EMPFAENGER . '.';
    }
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    antwort(405);
}

// Honeypot: Bots füllen dieses Feld aus, Menschen sehen es nicht
if (trim($_POST['bot-field'] ?? '') !== '') {
    antwort(200, '/danke/');
}

function feld(string $name, int $max = 200): string
{
    $wert = trim((string) ($_POST[$name] ?? ''));
    $wert = str_replace(["\r", "\n"], ' ', $wert);
    return mb_substr($wert, 0, $max);
}

$name = feld('name');
$ort = feld('ort');
$betrieb = feld('betrieb', 300);
$email = feld('email');
$branche = feld('branche');

if (mb_strlen($name) < 2 || mb_strlen($ort) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    antwort(422);
}

$text = "Neue Anfrage über phrank.io\n\n"
    . "Name:    $name\n"
    . "Ort:     $ort\n"
    . "Betrieb: " . ($betrieb !== '' ? $betrieb : '-') . "\n"
    . "E-Mail:  $email\n"
    . "Branche: " . ($branche !== '' ? $branche : '-') . "\n";

$betreff = '=?UTF-8?B?' . base64_encode("Anfrage Check: $name aus $ort") . '?=';
$kopf = implode("\r\n", [
    'From: phrank.io <' . ABSENDER . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

$gesendet = mail(EMPFAENGER, $betreff, $text, $kopf, '-f' . ABSENDER);

antwort($gesendet ? 200 : 500, $gesendet ? '/danke/' : '');

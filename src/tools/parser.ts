/**
 * Parse commands to dict in txt format
 */

import * as fs from 'fs';
import path from 'path';

/*
IN:
cl_show_welcome	Show welcome message indicating the first launch of the client	1	0	1 // BOOL CASE
cl_motd_time	How long to show the server message of the day	10	0	100 // INT CASE
cl_map_download_url	URL used to download maps (can start with http:// or https://)	"https://maps.ddnet.org" // STR CASE
cl_message_system_color	System message color	2817983	// HEX CASE
TO:
"cl_show_welcome": "Show welcome message indicating the first launch of the client | <bool> | ddbin-tag:",
"cl_motd_time": "How long to show the server message of the day | <int:0,100> | ddbin-tag:",
"cl_map_download_url": "URL used to download maps (can start with http:// or https://) | <str> | ddbin-tag:",
"cl_message_system_color": "System message color | <hex> | ddbin-tag:",
*/

// Archivo de entrada y salida
const inFile = path.join(__dirname, "../../commands.txt");
const outFile = path.join(__dirname, "../../parser.txt");

const data = fs.readFileSync(inFile, 'utf8');

// Regular expression to parse the input file lines
const regex = /^(\S+)\s+(.*?)\s+(?:"(.*?)"|\S+?)\s*(\S*)\s*(\S*)$/gm;

const outputLines: string[] = [];
let match: RegExpExecArray | null;

while ((match = regex.exec(data)) !== null) {
    const command = match[1].trim();
    let description = match[2].trim();
    const defaultValue = match[3] ? match[3].trim() : '';
    const minValue = match[4].trim();
    const maxValue = match[5].trim();

    let type: string;
    if (minValue === '' && maxValue === '') {
        type = '<hex>';
    } else if (minValue === '0' && maxValue === '1') {
        type = '<bool>';
    } else if (minValue !== '' && maxValue !== '') {
        type = `<int:${minValue},${maxValue}>`;
    } else {
        type = '<str>';
    }

    // Adjust description if needed
    description = description || '';

    // Ensure description is properly included
    const line = `"${command}": "${description} | ${type} | ddbin-tag:",`;
    outputLines.push(line);
}

// Write the output to the file
fs.writeFileSync(outFile, outputLines.join('\n'), 'utf8');
console.log('File parsed and written to', outFile);
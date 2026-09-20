# 🔎 Network Security Scanner

## Overview

This project is a Python-based network security scanner that checks common TCP ports on a target system and reports whether they are open or closed.

The current version scans `127.0.0.1`, which represents the local computer.

## Features

* Checks common TCP ports
* Identifies whether ports are open or closed
* Displays the common service associated with each port
* Uses Python's built-in `socket` library
* Provides a simple security-focused report

## Ports Tested

| Port | Common Service |
| ---: | -------------- |
|   21 | FTP            |
|   22 | SSH            |
|   23 | Telnet         |
|   25 | SMTP           |
|   53 | DNS            |
|   80 | HTTP           |
|  110 | POP3           |
|  143 | IMAP           |
|  443 | HTTPS          |
| 3306 | MySQL          |
| 3389 | RDP            |

## Example Output

```text
=== Network Security Scanner ===
Target: 127.0.0.1

Port 21    CLOSED  FTP
Port 22    CLOSED  SSH
Port 23    CLOSED  Telnet
Port 25    CLOSED  SMTP
Port 53    CLOSED  DNS
Port 80    CLOSED  HTTP
Port 110   CLOSED  POP3
Port 143   CLOSED  IMAP
Port 443   CLOSED  HTTPS
Port 3306  CLOSED  MySQL
Port 3389  CLOSED  RDP

Scan complete.
```

## Technologies

* Python
* Python `socket` library
* TCP/IP networking
* GitHub Codespaces
* Git/GitHub

## What I Learned

This project helped me practice:

* Creating TCP socket connections
* Understanding network ports
* Working with Python dictionaries and loops
* Handling connection timeouts
* Building a basic defensive security tool

## Future Improvements

Planned improvements include:

* Allowing the user to enter a target
* Adding more ports
* Improving the output format
* Adding command-line arguments
* Generating a security report
* Adding better error handling

## Safety


import socket

TARGET = "127.0.0.1"

COMMON_PORTS = {
    21: "FTP",
    22: "SSH",
    23: "Telnet",
    25: "SMTP",
    53: "DNS",
    80: "HTTP",
    110: "POP3",
    143: "IMAP",
    443: "HTTPS",
    3306: "MySQL",
    3389: "RDP"
}


def scan_port(target, port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(0.5)

    result = sock.connect_ex((target, port))

    sock.close()

    return result == 0


print("=== Network Security Scanner ===")
print(f"Target: {TARGET}")
print()

for port, service in COMMON_PORTS.items():
    if scan_port(TARGET, port):
        print(f"Port {port:<5} OPEN    {service}")
    else:
        print(f"Port {port:<5} CLOSED  {service}")

print()
print("Scan complete.")
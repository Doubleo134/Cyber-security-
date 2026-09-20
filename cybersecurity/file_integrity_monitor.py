import hashlib
import os

FILE = "file shield/project2/test_file.txt"
HASH_FILE = "file shield/project2/original_hash.txt"


def calculate_hash(filename):
    sha256 = hashlib.sha256()

    with open(filename, "rb") as file:
        while chunk := file.read(4096):
            sha256.update(chunk)

    return sha256.hexdigest()


if not os.path.exists(HASH_FILE):
    file_hash = calculate_hash(FILE)

    with open(HASH_FILE, "w") as file:
        file.write(file_hash)

    print("[+] FileShield baseline created.")
    print("[+] SHA-256:", file_hash)

else:
    with open(HASH_FILE, "r") as file:
        original_hash = file.read().strip()

    current_hash = calculate_hash(FILE)

    print("FileShield Integrity Check")
    print("--------------------------")

    if current_hash == original_hash:
        print("[+] File is unchanged.")
    else:
        print("[!] WARNING: File has been modified!")
        print()
        print("Original hash:", original_hash)
        print("Current hash: ", current_hash)

    
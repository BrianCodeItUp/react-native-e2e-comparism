# Install the rest of tools (e.g. avdmanager)
echo yes | sdkmanager tools
# Install the system image.
echo yes | sdkmanager "system-images;android-29;default;x86_64"
# Create and start emulator for the script. Meant to race the install task.
echo no | avdmanager create avd -n  -d Pixel_3_API_29 --package "system-images;android-29;default;x86_64"
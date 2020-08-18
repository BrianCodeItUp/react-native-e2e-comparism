export PATH=$HOME/.nvm/versions/node/v12.18.3/bin:$PATH
detox build -c android.emu.release
$ANDROID_HOME/emulator/emulator -avd detoxTestEmulator -no-window -noaudio -no-boot-anim -wipe-data &
 android-wait-for-emulator
 adb shell settings put global window_animation_scale 0
 adb shell settings put global transition_animation_scale 0
 adb shell settings put global animator_duration_scale 0
 adb shell input keyevent 82
detox test -c android.emu.release
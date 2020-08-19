export PATH=$HOME/.nvm/versions/node/v12.18.3/bin:$PATH
detox build -c android.emu.release
# $ANDROID_HOME/emulator/emulator -verbose -no-window -no-audio -no-boot-anim -wipe-data -gpu swiftshader_indirect @Pixel_3_API_29 &
detox test -c android.emu.release --cleanup
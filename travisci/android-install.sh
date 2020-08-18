export PATH=$HOME/.nvm/versions/node/v12.18.3/bin:$PATH
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install 12.18.3
nvm use 12.18.3
nvm alias default 12.18.3
npm install
npm install -g react-native
npm install -g detox-cli


cd android && sudo chmod +x ./gradlew
./gradlew androidDependencies
cd ..
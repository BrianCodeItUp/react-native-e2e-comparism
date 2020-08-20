brew tap wix/brew
brew install applesimutils
brew install watchman
brew insatll yarn
gem install xcpretty >/dev/null 2>&1
gem install cocoapods
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
export PATH=$HOME/.nvm/versions/node/v12.18.3/bin:$PATH
nvm install 12.18.3
nvm use 12.18.3
nvm alias default 12.18.3
yarn
yarn global add react-native
yarn global add detox-cli
cd ios/ && pod install && cd ..
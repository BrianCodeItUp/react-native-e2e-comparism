  
export PATH=$HOME/.nvm/versions/node/v12.18.3/bin:$PATH
set -o pipefail && detox build --configuration ios.sim.release
detox test --configuration ios.sim.release --cleanup
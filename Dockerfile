from node:15
workdir /app
copy package.json .
run npm install
copy . ./
expose 8080
cmd ['node', index.js]

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

// a script to build all of the boiler plate for a component branch
// npm run buildComponentBranch --dirName=hello

const env = process.env;
const dirName = env.npm_config_dirName;
const cwd = process.cwd();

const createDirectory = (dirPath, directoryName) => {
    const subdir = path.resolve(`${dirPath}/${directoryName}`);
    mkdirp.sync(subdir, (err) => err ? console.error(err) : console.log(`${directoryName} component branch created`))
}

const replaceName = (fileContents) => {
    return fileContents.replace(/ContainerNameIsReplaced/gi, `${dirName}Container`);
}

const composeJsxContainer = (fileContents) => {
    return replaceName(fileContents);
}

const createJsxComponentContainerBoilerPlate = () => {
    const fileContents = fs.readFileSync(`${cwd}/projectScripts/componentBranch/container.jsx`).toString('utf-8');

    const modifiedFileContents = composeJsxContainer(fileContents);

    fs.writeFile(`${cwd}/src/organisms/${dirName}/${dirName}Container.jsx`, modifiedFileContents, (err) => {
        if(err) {
            return console.error(err);
        }
        console.log('success');
    });
}

const buildReduxBoilerPlate = (type) => {
    // check for correct singular/plural in the next two lines, refactor
    const fileAndContents = fs.readFileSync(`${cwd}/projectScripts/componentBranch/${type}.js`).toString('utf-8');
    fs.writeFile(`${cwd}/src/organisms/${dirName}/redux/${type}s.js`, fileAndContents, (err) => {
        if(err) {
            return console.error(err);
        }
        console.log('success');
    });
}

const buildInteractorBoilerPlate = (type) => {
    // check for correct singular/plural in the next two lines, refactor
    const fileAndContents = fs.readFileSync(`${cwd}/projectScripts/componentBranch/interactor.js`).toString('utf-8');
    fs.writeFile(`${cwd}/src/organisms/${dirName}/interactors/${type}.js`, fileAndContents, (err) => {
        if(err) {
            return console.error(err);
        }
        console.log('success');
    });
}

const buildContainerLevelCssFile = () => {
    fs.closeSync(fs.openSync(`${cwd}/src/organisms/${dirName}/styles/${dirName}Container.css`, 'w'));
}

// refactor
const organismsDirectory = 'src/organisms'
createDirectory(organismsDirectory, dirName);
const actionDirectory = `${organismsDirectory}/${dirName}`;
createDirectory(actionDirectory, 'redux');
createDirectory(actionDirectory, 'interactors');
createDirectory(actionDirectory, 'styles');
buildReduxBoilerPlate('action');
buildReduxBoilerPlate('reducer');
buildReduxBoilerPlate('reduxBinding');
buildInteractorBoilerPlate('exampleInteractor');
createJsxComponentContainerBoilerPlate();
buildContainerLevelCssFile();

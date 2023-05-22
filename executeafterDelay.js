const executeafterDelay = (delayedFunction, seconds) => {
    setTimeout(delayedFunction, seconds * 1000);
};

module.exports = executeafterDelay;
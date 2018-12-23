function doWork() {
    throw new Error('unable to do the work!');
}


try {
    doWork();
}
catch(e) {
    console.log(e.message);
}
finally {
    console.log('Finally block executed!');
}
console.log('try-catch-ended!');

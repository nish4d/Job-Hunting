const details = (id, bigData) => {
    let newData = {}
    const data = bigData.find((job) => job.id === id);
    newData = data
    console.log(newData);
    return newData;
};
export { details };

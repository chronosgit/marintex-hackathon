const getObjectOfPersonalPostIds = (myPosts) => {
    const obj = {};

    for(let post of myPosts) {
        obj[post.id] = true;
    }
    
    return obj;
};

export default getObjectOfPersonalPostIds;
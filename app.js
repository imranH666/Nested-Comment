// Select all top-level <li> elements in the parent <ul>
const parentListItems = document.querySelectorAll('.comments-list > li');

parentListItems.forEach(item => {
    // Check if the current <li> has a nested <ul>
    const nestedUl = item.querySelector('ul');
    
    if (!nestedUl) {
        item.className = 'removeNullReplyBox'
    }
});



function setAfterHeight(Ul) {
    if (Ul.lastElementChild) { // Check if there is a last child
        const child = Ul.lastElementChild;
        const parentElement = child.parentElement.parentElement;

        const height = parentElement.offsetHeight - child.offsetHeight - 15;
        parentElement.style.setProperty('--after-height', `${height}px`);
    }
}

const commentListsUl = document.querySelectorAll('.comments-list li ul');
commentListsUl.forEach(Ul => {
    setAfterHeight(Ul);
});


window.addEventListener('resize', () => {
    function setAfterHeight(Ul) {
        if (Ul.lastElementChild) { // Check if there is a last child
            const child = Ul.lastElementChild;
            const parentElement = child.parentElement.parentElement;
    
            const height = parentElement.offsetHeight - child.offsetHeight - 15;
            parentElement.style.setProperty('--after-height', `${height}px`);
        }
    }
    
    // Select all nested comments lists
    const commentListsUl = document.querySelectorAll('.comments-list li ul');
    commentListsUl.forEach(Ul => {
        setAfterHeight(Ul);
    });
})



// const commentLists1 = document.querySelectorAll('.comments-list');

// commentLists1.forEach(ul => {
//     const lastLi = ul.querySelector('li:last-child');
//     lastLi.style.background = 'red'
//     console.log(ul); // This will log the last <li> within each <ul>
// });



// const ul = document.querySelector('.comments-list li');
// const lastLi = ul.querySelector('li:last-child');

// // Calculate the position of the last <li>
// const lastLiRect = lastLi.getBoundingClientRect();
// const ulRect = ul.getBoundingClientRect();

// // Calculate the height for the ::after element
// const height = lastLiRect.top - ulRect.top;

// // Set the height as an inline style
// ul.style.setProperty('--after-height', `${height}px`);

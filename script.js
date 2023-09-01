'use strict'

const pointer = document.querySelectorAll('.pointer');

pointer.forEach((point) => {
    
    const desc = point.querySelector('.desc');
    const path = point.querySelector('path');
    const descStyles = window.getComputedStyle(desc);
    const descWidth = parseInt(`${descStyles.width}`, '10') + 50;
    const activeWidth = descWidth + 'px';

    point.addEventListener('click', () => {
            point.classList.toggle('active')

        if(point.classList.contains('active')) {
            desc.style.cssText += 'visibility: visible';
            point.style.width = `${activeWidth}`;
            path.setAttribute('d', 'M24 15V15M19 20H29')
        } else {
            path.setAttribute('d', 'M20 15V25M15 20H25')
            desc.style.visibility = 'hidden';
            point.style.width = '30px';
        }
    })
})

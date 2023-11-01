import chengeNumInputs from "./chengeNumInputs";
const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          widnowProfile = document.querySelectorAll('.checkbox');

    chengeNumInputs('#width');
    chengeNumInputs('#height');

    function bindActionToElements(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i === j) {
                                    box.checked = true;
                                } 
                            });
                        } else {
                            state[prop] = item.value
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value
                        break;
                }
            });
        });
    }

    bindActionToElements('click', windowForm, 'form');
    bindActionToElements('input', windowWidth, 'width');
    bindActionToElements('input', windowHeight, 'height');
    bindActionToElements('change', windowType, 'type');
    bindActionToElements('change', widnowProfile, 'profile');
};

export default changeModalState;
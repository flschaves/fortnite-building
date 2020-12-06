;(function(window, document, undefined){

    'use strict';

    const buildingElement = document.querySelector('.building');

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        
        switch (keyName) {
            case 'q':
                addMaterial('wall');
                break;
            
            case 'c':
                addMaterial('platform');
                break;
        
            case 'f':
                addMaterial('stairs');
                break;
    
            case 'x':
                addMaterial('piramid');
                break;
        
            case 'o':
                clearMaterials();
                break;
                
            default:
                break;
        }

    });

    var clearMaterials = () => {
        while (buildingElement.firstChild) {
            buildingElement.removeChild(buildingElement.firstChild);
        }
    }

    var addMaterial = (material) => {
        const materialElement = document.createElement('div');
        materialElement.className = 'building-item material ' + material;
        buildingElement.appendChild(materialElement);

        let materialsHeight = 0;
        buildingElement.querySelectorAll('.building-item').forEach((el, i) => {
            materialsHeight += el.offsetHeight;
        });

        if (materialsHeight >= buildingElement.offsetHeight) {
            buildingElement.removeChild(buildingElement.firstChild);
        }
    }

})(window, document);
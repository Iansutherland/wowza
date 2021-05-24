
//used to show stats on page during dev
export default function DevStats(threeMesh, name = '') {
    let meshReference = threeMesh ? threeMesh : null;
    let meshName = name;
    const domElement = document.querySelector('#controls');

    const paint = () => {
        if (meshReference) {
            const content = Table({ position: meshReference.position, rotation: meshReference.rotation }, meshName);
            domElement.innerHTML = content;
        }
    }

    const SetMeshReference = (meshRef, name) => {
        meshReference = meshRef;
        meshName = name ? name : '';
    };

    return {
        SetMeshReference: SetMeshReference,
        Paint: paint
    }
}

function Table(stats, name) {
    const { position, rotation } = stats;
    let content = `
        <p>${name}</p>
        <table>
            <tbody>
                <tr>
                    <th>Position X</th>
                    <th>Position Y</th>
                    <th>Position Z</th>
                </tr>
                <tr>
                    <th>${formatNumber(position.x)}</th>
                    <th>${formatNumber(position.y)}</th>
                    <th>${formatNumber(position.z)}</th>
                </tr>
                <tr>
                    <th>Rotation X</th>
                    <th>Rotation Y</th>
                    <th>Rotation Z</th>
                </tr>
                <tr>
                    <th>${formatNumber(rotation.x)}</th>
                    <th>${formatNumber(rotation.y)}</th>
                    <th>${formatNumber(rotation.z)}</th>
                </tr>
            </tbody>
        </table>
    `;

    return content;
}

function formatNumber(num) {
    return num.toFixed(2);
    
}
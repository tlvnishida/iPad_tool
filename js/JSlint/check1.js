/*jslint browser */
document.addEventListener('dragstart', function(event) {
const draggable = event.target.getAttribute("draggable");
// 明示的にdraggableにしている要素以外ドラッグ禁止
if (!draggable || draggable === 'auto') {
event.preventDefault();
}
});
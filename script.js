let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')

// btnAdd.click(() => {
    function addItem() {
  let listItem = $('<li>', {
    'class': 'list-group-item',
    text: inpNewTask.val()
  })
  listItem.click(() => {
    listItem.toggleClass('done')
  })
  ulTasks.append(listItem)
  inpNewTask.val('')
}
function sortTasks() {
  $('#ulTasks .done').appendTo(ulTasks)
}

function clearDone() {
  $('#ulTasks .done').remove()
}


inpNewTask.keypress((e) => {
  if (e.which == 13) addItem()

})
// btnAdd.click(() => {
//     console.log(inpNewTask.val())
// })
 btnAdd.click(addItem)
 btnReset.click(() => {inpNewTask.val('')})
 btnCleanup.click(clearDone)
 btnSort.click(sortTasks)
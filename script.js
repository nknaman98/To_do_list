let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
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

inpNewTask.keypress((e) => {
  if (e.which == 13) addItem()

})
// btnAdd.click(() => {
//     console.log(inpNewTask.val())
// })
btnAdd.click(addItem)

btnClear.click(() => inpNewTask.val(''))
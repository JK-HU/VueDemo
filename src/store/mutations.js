export const setMenuItems = (state,data) => {
    state.menuItems = data
}
export const removeMenuItem = (state,data) => {
    //这个穿过来的data是你要删除的数据
    state.menuItems.forEach( (items,index) => {
        //这个item是数据库存起来的
        if (items == data) {
            state.menuItems.splice(index,1)
        }
    })
}
export const pushToMenuItems = (state,data) => {
    state.menuItems.push(data)
}
export const userStatus = (state,user) => {
    
    if (user) {
       
        console.log(user)
        state.currenUser = user
        state.isLogin = true
    }else {
        state.currenUser = null
        state.isLogin = false
    }
}

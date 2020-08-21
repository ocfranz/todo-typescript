const preventClickOutside = (ref : any,event : any)=>{
    if (!ref.current.contains(event.target)) return true
    return false
    
}

export {preventClickOutside};
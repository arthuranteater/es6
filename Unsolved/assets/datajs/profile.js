// Profile generator

class Profile {
    constructor(name, age, hobbies) {
        this.name = name
        this.age = age
        this.hobbies = hobbies
    }
    createCard() {
        return `<div class="card" onMouseOver="this.style.color='0 8px 16px 0 rgba(0,0,0,0.2)"
        onMouseOut="this.style.box-shadow=0 4px 8px 0 rgba(0,0,0,0.2)'" style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;">
        <img src="../images/${this.name}.png" alt="Avatar" style="width:100%;">
        <div class="container style="padding: 2px 16px;">
          <h4><b>${this.name}</b></h4>
          <p>${this.age}</p>
          <p>${this.hobbies}</p>
        </div>
      </div>`
    }
}


const obj = {
    test: 'it works'
}



module.exports = {
    Profile: Profile,
    obj
}
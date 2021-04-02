// To show input response

{
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output ')
    output.textContent = salary.value
    salary.addEventListener('input', function() {
        output.textContent = salary.value
    })

}


// to validate name
{

    const text = document.querySelector('#name')
    const textError = document.querySelector('.text-error')
    text.addEventListener('input', function() {
        let nameRegex = RegExp('^[A-Z]{1,}[a-zA-Z0-9]{2,}$')
        if (nameRegex.test(text.value)) {
            textError.textContent = "";
        } else {
            textError.textContent = "*Name is incorrect"
        }
        console.log(text.value)

    })
}

// class to populate object
class EmployeePayrollData {
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }


    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[A-Za-z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect!'
    }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department }
    set department(department) {
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    get notes() { return this._notes }
    set notes(notes) {
        this._notes = notes;
    }

    get startDate() { return this._startDate }
    set startDate(startDate) {
        this._startDate = startDate;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);

        return "id=" + this.id + ", name=" + this.name + ", gender=" + this.gender + ", profilePic=" + this.profilePic + ", department=" + this.department +
            ", salary=" + this.salary + ", startDate=" + empDate + ", notes=" + this.notes;

    }
}
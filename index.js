
const convertBtn = document.getElementById("convert-btn")
const inputNum = document.getElementById("input-num")
let plength = document.getElementById("plength")
let pvolume = document.getElementById("pvolume")
let pmass = document.getElementById("pmass")


convertBtn.addEventListener("click", function() {
    conversion(inputNum.value)
})

function conversion(inp) {
    inp = Number(inp)
    plength.innerText = `
        ${inp} meters = ${(inp * 3.281).toFixed(3)} feet | ${inp} feet = ${(inp / 3.281).toFixed(3)} meters
    `
    pvolume.innerText = `
    ${inp} liters = ${(inp * 0.264).toFixed(3)} gallons | ${inp} gallons = ${(inp / 0.264).toFixed(3)} liters`
    pmass.innerText = `
    ${inp} kilos = ${(inp * 2.204).toFixed(3)} pounds | ${inp} pounds = ${(inp / 2.204).toFixed(3)} kilos`
}

const rewire = require("rewire")
const game = rewire("./game")
const caclulateWinner = game.__get__("caclulateWinner")
// @ponicode
describe("handleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Edmond", "Michael"], ["George", "Pierre Edouard", "Edmond"], ["George", "Edmond", "Jean-Philippe"]]
        inst = new game.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleClick(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleClick(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleClick(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleClick(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleClick(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("jumpTo", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Edmond", "Anas"], ["Pierre Edouard", "Jean-Philippe", "Anas"], ["Edmond", "Edmond", "Pierre Edouard"]]
        inst = new game.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.jumpTo(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.jumpTo(50)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.jumpTo(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.jumpTo(1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.jumpTo(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.jumpTo(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("caclulateWinner", () => {
    test("0", () => {
        let callFunction = () => {
            caclulateWinner(["Anas", "George", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            caclulateWinner(["Jean-Philippe", "George", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            caclulateWinner(["George", "Michael", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            caclulateWinner(["Anas", "Edmond", "Anas"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            caclulateWinner(["Edmond", "Michael", "Edmond"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            caclulateWinner(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

const sum = require("./sum.js")

describe('example tests', () => { 
    it("should adds 1 + 2 to equal", () =>{
        const result = sum(1,2)
        expect(result).toBe(3)
    })

    it("object assignment", ()=>{
        const obj = {}
        expect(obj).toEqual({})
    })
 })

describe('truthy or falsy', () => { 
    it("null", ()=>{
        const n = null
        expect(n).toBeFalsy()
        expect(n).not.toBeTruthy()
        expect(n).toBeNull()
        expect(n).not.toBeUndefined()
    })
 })


 describe('numbers', () => { 
    it('two plus two', ()=>{
        const value = 2+2
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(1)
        expect(value).toBeLessThanOrEqual(4)
    })

    it('adding floates',()=>{
      const value= 0.1 +0.2
      expect(value).toBeCloseTo(0.3004)
    })
  })

  describe('strings', () => { 
    it('there is no I in team', ()=>{
        expect('team').not.toMatch(/I/)
    })
   })

   describe('arrays', () => { 
        it('array1', ()=>{
            const shoppingLists = [
                'can', 'water', 'cat food', 'birds food', 'battries'
            ] 
            expect(shoppingLists).toContain('can')
        })
    })

    const compileAndroidCode = ()=>{
        throw new Error("you are using the wrong JDK");
    }

    describe('exceptions', () => { 
        it('compiling android goes as exepected',()=>{
            expect(() => compileAndroidCode()).toThrow(Error)
            expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK")
        })
     })
function sampleResolve(val) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(val * 2)
        }, 2000)
    })
}

function throwError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("エラーがあったよ")
                resolve('エラーなし')
            } catch (err) {
                reject(err);
            }
        }, 1000)
    })
}

/**
 * sampleResolve()をawaitしているため、Promiseの結果が返されるまで処理が一時停止される
 * 今回の場合、2秒後にresolve(10)が返ってきてその後の処理（return result + 5;）が再開される
 * resultにはresolveされた10が格納されているため、result + 5 = 15がreturnされる
 */
function sample() {
    return sampleResolve(5).then(result => {
        return result + 5
    })
}

function sample2() {
    let result = 0
    return sampleResolve(5).then(val => {
        result += val
        return sampleResolve(10)
    }).then(val => {
        result += val
        return sampleResolve(20)
    }).then(val => {
        result += val
        return result
    })
}

//例外処理
function errorHandling() {
    return throwError().then(result => {
        return result
    }).catch(err => {
        throw err
    })
}

sample().then(res => {
    console.log(res)
})

sample2().then(v => {
    console.log(v)
})

errorHandling().catch((err) => {
    console.log(err)
})
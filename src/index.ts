/*
 * The hourglass program
 *
 * @author  Devin Jhu
 * @version 1.0
 * @since   2022-11-22
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 *
 * Function of Hourglass
 *
 * @param {number} userInt number of disks
 * @param {number} spaceAmount first peg
 */
function hourglass(userInt: number, spaceAmount: number = 0): void {
  // Generate asterisk.
  let output: string = ''

  for (let counter: number = 0; counter < spaceAmount; counter++) {
    output += ' '
  }

  for (let counter1: number = 0; counter1 < userInt; counter1++) {
    output += '* '
  }

  console.log(output)

  if (userInt > 1) {
    hourglass(userInt - 1, spaceAmount + 1)
  }
  console.log(output)
}

const userInt = prompt('enter hourglass height: ')

try {
  const input = parseInt(userInt)

  if (isNaN(input)) {
    console.log('not a number')
  } else if (input <= 0) {
    console.log('not valid')
  } else hourglass(input)
} catch (e) {
  console.log('not a number')
}

console.log('Done.')

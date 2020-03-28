(_ => {
  const decToBin = dec => {
    const ip = [...'000000000000000000000000000000000000'];
    ip[Number(35 - dec)] = '1';
    return ip.join('');
  };
  const ipBit = (ip, bit) => +ip[35 - bit];
  const sevenSeg = document.querySelector('.sixteen-seg');

  const segMap = [
    (
      ip,
      seg // 0
    ) =>
      ipBit(ip, 0) ||
      ipBit(ip, 1) ||
      ipBit(ip, 2) ||
      ipBit(ip, 3) ||
      // ipBit(ip, 4) ||
      ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      ipBit(ip, 12) ||
      ipBit(ip, 13) ||
      ipBit(ip, 14) ||
      ipBit(ip, 15) ||
      ipBit(ip, 16) ||
      // ipBit(ip, 17) ||
      ipBit(ip, 18) ||
      ipBit(ip, 19) ||
      // ipBit(ip, 20) ||
      // ipBit(ip, 21) ||
      // ipBit(ip, 22) ||
      // ipBit(ip, 23) ||
      ipBit(ip, 24) ||
      ipBit(ip, 25) ||
      ipBit(ip, 26) ||
      ipBit(ip, 27) ||
      ipBit(ip, 28) ||
      ipBit(ip, 29) ||
      // ipBit(ip, 30) ||
      // ipBit(ip, 31) ||
      // ipBit(ip, 32) ||
      // ipBit(ip, 33) ||
      // ipBit(ip, 34) ||
      ipBit(ip, 35)
        ? ` --seg${seg}`
        : '',
    (
      ip,
      seg // 1
    ) =>
      ipBit(ip, 0) ||
      // ipBit(ip, 1) ||
      // ipBit(ip, 2) ||
      // ipBit(ip, 3) ||
      // ipBit(ip, 4) ||
      ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      // ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      // ipBit(ip, 11) ||
      ipBit(ip, 12) ||
      // ipBit(ip, 13) ||
      ipBit(ip, 14) ||
      ipBit(ip, 15) ||
      ipBit(ip, 16) ||
      ipBit(ip, 17) ||
      // ipBit(ip, 18) ||
      // ipBit(ip, 19) ||
      ipBit(ip, 20) ||
      ipBit(ip, 21) ||
      ipBit(ip, 22) ||
      ipBit(ip, 23) ||
      ipBit(ip, 24) ||
      ipBit(ip, 25) ||
      ipBit(ip, 26) ||
      ipBit(ip, 27) ||
      ipBit(ip, 28) ||
      // ipBit(ip, 29) ||
      ipBit(ip, 30) ||
      ipBit(ip, 31) ||
      ipBit(ip, 32) //  ||
        ? // ipBit(ip, 33) ||
          // ipBit(ip, 34) ||
          // ipBit(ip, 35)
          ` --seg${seg}`
        : '',
    (
      ip,
      seg // 2
    ) =>
      ipBit(ip, 0) ||
      // ipBit(ip, 1) ||
      ipBit(ip, 2) ||
      // ipBit(ip, 3) ||
      ipBit(ip, 4) ||
      // ipBit(ip, 5) ||
      // ipBit(ip, 6) ||
      // ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      // ipBit(ip, 12) ||
      ipBit(ip, 13) ||
      // ipBit(ip, 14) ||
      // ipBit(ip, 15) ||
      // ipBit(ip, 16) ||
      ipBit(ip, 17) ||
      // ipBit(ip, 18) ||
      // ipBit(ip, 19) ||
      // ipBit(ip, 20) ||
      // ipBit(ip, 21) ||
      ipBit(ip, 22) ||
      ipBit(ip, 23) ||
      ipBit(ip, 24) ||
      ipBit(ip, 25) ||
      ipBit(ip, 26) ||
      ipBit(ip, 27) ||
      // ipBit(ip, 28) ||
      // ipBit(ip, 29) ||
      ipBit(ip, 30) ||
      // ipBit(ip, 31) ||
      ipBit(ip, 32) //  ||
        ? // ipBit(ip, 33) ||
          // ipBit(ip, 34) ||
          // ipBit(ip, 35)
          ` --seg${seg}`
        : '',
    (
      ip,
      seg // 3
    ) =>
      // ipBit(ip, 0) ||
      // ipBit(ip, 1) ||
      // ipBit(ip, 2) ||
      ipBit(ip, 3) ||
      // ipBit(ip, 4) ||
      ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      // ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      // ipBit(ip, 11) ||
      // ipBit(ip, 12) ||
      // ipBit(ip, 13) ||
      ipBit(ip, 14) ||
      ipBit(ip, 15) ||
      // ipBit(ip, 16) ||
      ipBit(ip, 17) ||
      // ipBit(ip, 18) ||
      // ipBit(ip, 19) ||
      ipBit(ip, 20) ||
      // ipBit(ip, 21) ||
      // ipBit(ip, 22) ||
      // ipBit(ip, 23) ||
      // ipBit(ip, 24) ||
      ipBit(ip, 25) ||
      // ipBit(ip, 26) ||
      ipBit(ip, 27) ||
      ipBit(ip, 28) //  ||
        ? // ipBit(ip, 29) ||
          // ipBit(ip, 30) ||
          // ipBit(ip, 31) ||
          // ipBit(ip, 32) ||
          // ipBit(ip, 33) ||
          // ipBit(ip, 34) ||
          // ipBit(ip, 35)
          ` --seg${seg}`
        : '',
    (
      ip,
      seg // 4
    ) =>
      ipBit(ip, 0) ||
      // ipBit(ip, 1) ||
      // ipBit(ip, 2) ||
      // ipBit(ip, 3) ||
      // ipBit(ip, 4) ||
      // ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      // ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      // ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      // ipBit(ip, 11) ||
      ipBit(ip, 12) ||
      // ipBit(ip, 13) ||
      ipBit(ip, 14) ||
      ipBit(ip, 15) ||
      ipBit(ip, 16) ||
      ipBit(ip, 17) ||
      // ipBit(ip, 18) ||
      ipBit(ip, 19) ||
      ipBit(ip, 20) ||
      ipBit(ip, 21) ||
      ipBit(ip, 22) ||
      ipBit(ip, 23) ||
      ipBit(ip, 24) ||
      ipBit(ip, 25) ||
      ipBit(ip, 26) ||
      ipBit(ip, 27) ||
      // ipBit(ip, 28) ||
      // ipBit(ip, 29) ||
      ipBit(ip, 30) ||
      ipBit(ip, 31) ||
      ipBit(ip, 32) //  ||
        ? // ipBit(ip, 33) ||
          // ipBit(ip, 34) ||
          // ipBit(ip, 35)
          ` --seg${seg}`
        : '',
    (
      ip,
      seg // 5
    ) =>
      ipBit(ip, 0) ||
      // ipBit(ip, 1) ||
      // ipBit(ip, 2) ||
      // ipBit(ip, 3) ||
      ipBit(ip, 4) ||
      // ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      // ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      // ipBit(ip, 12) ||
      ipBit(ip, 13) ||
      // ipBit(ip, 14) ||
      // ipBit(ip, 15) ||
      ipBit(ip, 16) ||
      ipBit(ip, 17) ||
      // ipBit(ip, 18) ||
      // ipBit(ip, 19) ||
      // ipBit(ip, 20) ||
      // ipBit(ip, 21) ||
      ipBit(ip, 22) ||
      ipBit(ip, 23) ||
      ipBit(ip, 24) ||
      // ipBit(ip, 25) ||
      ipBit(ip, 26) ||
      // ipBit(ip, 27) ||
      // ipBit(ip, 28) ||
      // ipBit(ip, 29) ||
      ipBit(ip, 30) ||
      // ipBit(ip, 31) ||
      ipBit(ip, 32) // ||
        ? // ipBit(ip, 33) ||
          // ipBit(ip, 34) ||
          // ipBit(ip, 35)
          ` --seg${seg}`
        : '',
    (
      ip,
      seg // 6
    ) =>
      ipBit(ip, 0) ||
      ipBit(ip, 1) ||
      ipBit(ip, 2) ||
      ipBit(ip, 3) ||
      // ipBit(ip, 4) ||
      ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      // ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      // ipBit(ip, 9) ||
      // ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      ipBit(ip, 12) ||
      ipBit(ip, 13) ||
      ipBit(ip, 14) ||
      // ipBit(ip, 15) ||
      ipBit(ip, 16) ||
      // ipBit(ip, 17) ||
      ipBit(ip, 18) ||
      ipBit(ip, 19) ||
      // ipBit(ip, 20) ||
      ipBit(ip, 21) ||
      // ipBit(ip, 22) ||
      // ipBit(ip, 23) ||
      ipBit(ip, 24) ||
      // ipBit(ip, 25) ||
      ipBit(ip, 26) ||
      // ipBit(ip, 27) ||
      ipBit(ip, 28) ||
      // ipBit(ip, 29) ||
      ipBit(ip, 30) ||
      // ipBit(ip, 31) ||
      // ipBit(ip, 32) ||
      // ipBit(ip, 33) ||
      // ipBit(ip, 34) ||
      ipBit(ip, 35)
        ? ` --seg${seg}`
        : '',
    (
      ip,
      seg // 7
    ) =>
      ipBit(ip, 0) ||
      // ipBit(ip, 1) ||
      ipBit(ip, 2) ||
      ipBit(ip, 3) ||
      // ipBit(ip, 4) ||
      ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      ipBit(ip, 12) ||
      ipBit(ip, 13) ||
      ipBit(ip, 14) ||
      ipBit(ip, 15) ||
      ipBit(ip, 16) ||
      // ipBit(ip, 17) ||
      ipBit(ip, 18) ||
      ipBit(ip, 19) ||
      // ipBit(ip, 20) ||
      // ipBit(ip, 21) ||
      // ipBit(ip, 22) ||
      // ipBit(ip, 23) ||
      ipBit(ip, 24) ||
      ipBit(ip, 25) ||
      ipBit(ip, 26) ||
      ipBit(ip, 27) ||
      ipBit(ip, 28) ||
      ipBit(ip, 29) ||
      // ipBit(ip, 30) ||
      // ipBit(ip, 31) ||
      // ipBit(ip, 32) ||
      // ipBit(ip, 33) ||
      // ipBit(ip, 34) ||
      ipBit(ip, 35)
        ? ` --seg${seg}`
        : '',
    (
      ip,
      seg // 8
    ) =>
      // ipBit(ip, 0) ||
      ipBit(ip, 1) ||
      // ipBit(ip, 2) ||
      // ipBit(ip, 3) ||
      // ipBit(ip, 4) ||
      // ipBit(ip, 5) ||
      // ipBit(ip, 6) ||
      // ipBit(ip, 7) ||
      // ipBit(ip, 8) ||
      // ipBit(ip, 9) ||
      // ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      // ipBit(ip, 12) ||
      ipBit(ip, 13) ||
      // ipBit(ip, 14) ||
      // ipBit(ip, 15) ||
      // ipBit(ip, 16) ||
      // ipBit(ip, 17) ||
      ipBit(ip, 18) ||
      ipBit(ip, 19) ||
      // ipBit(ip, 20) ||
      // ipBit(ip, 21) ||
      // ipBit(ip, 22) ||
      // ipBit(ip, 23) ||
      // ipBit(ip, 24) ||
      // ipBit(ip, 25) ||
      // ipBit(ip, 26) ||
      // ipBit(ip, 27) ||
      // ipBit(ip, 28) ||
      ipBit(ip, 29) //  ||
        ? // ipBit(ip, 30) ||
          // ipBit(ip, 31) ||
          // ipBit(ip, 32) ||
          // ipBit(ip, 33) ||
          // ipBit(ip, 34) ||
          // ipBit(ip, 35)
          ` --seg${seg}`
        : '',
    (
      ip,
      seg // 9
    ) =>
      // ipBit(ip, 0) ||
      // ipBit(ip, 1) ||
      // ipBit(ip, 2) ||
      // ipBit(ip, 3) ||
      ipBit(ip, 4) ||
      // ipBit(ip, 5) ||
      // ipBit(ip, 6) ||
      // ipBit(ip, 7) ||
      // ipBit(ip, 8) ||
      // ipBit(ip, 9) ||
      // ipBit(ip, 10) ||
      // ipBit(ip, 11) ||
      // ipBit(ip, 12) ||
      // ipBit(ip, 13) ||
      // ipBit(ip, 14) ||
      // ipBit(ip, 15) ||
      // ipBit(ip, 16) ||
      // ipBit(ip, 17) ||
      // ipBit(ip, 18) ||
      // ipBit(ip, 19) ||
      // ipBit(ip, 20) ||
      // ipBit(ip, 21) ||
      ipBit(ip, 22) ||
      ipBit(ip, 23) ||
      // ipBit(ip, 24) ||
      // ipBit(ip, 25) ||
      // ipBit(ip, 26) ||
      // ipBit(ip, 27) ||
      // ipBit(ip, 28) ||
      // ipBit(ip, 29) ||
      // ipBit(ip, 30) ||
      // ipBit(ip, 31) ||
      // ipBit(ip, 32) ||
      ipBit(ip, 33) ||
      ipBit(ip, 34) // ||
        ? // ipBit(ip, 35)
          ` --seg${seg}`
        : '',
    (
      ip,
      seg // A
    ) =>
      ipBit(ip, 0) ||
      // ipBit(ip, 1) ||
      // ipBit(ip, 2) ||
      ipBit(ip, 3) ||
      // ipBit(ip, 4) ||
      // ipBit(ip, 5) ||
      // ipBit(ip, 6) ||
      ipBit(ip, 7) ||
      // ipBit(ip, 8) ||
      // ipBit(ip, 9) ||
      // ipBit(ip, 10) ||
      // ipBit(ip, 11) ||
      // ipBit(ip, 12) ||
      // ipBit(ip, 13) ||
      // ipBit(ip, 14) ||
      // ipBit(ip, 15) ||
      // ipBit(ip, 16) ||
      // ipBit(ip, 17) ||
      // ipBit(ip, 18) ||
      // ipBit(ip, 19) ||
      ipBit(ip, 20) ||
      // ipBit(ip, 21) ||
      ipBit(ip, 22) ||
      // ipBit(ip, 23) ||
      // ipBit(ip, 24) ||
      // ipBit(ip, 25) ||
      // ipBit(ip, 26) ||
      // ipBit(ip, 27) ||
      // ipBit(ip, 28) ||
      // ipBit(ip, 29) ||
      // ipBit(ip, 30) ||
      ipBit(ip, 31) ||
      // ipBit(ip, 32) ||
      ipBit(ip, 33) ||
      ipBit(ip, 34) ||
      ipBit(ip, 35)
        ? ` --seg${seg}`
        : '',
    (
      ip,
      seg // B
    ) =>
      // ipBit(ip, 0) ||
      // ipBit(ip, 1) ||
      ipBit(ip, 2) ||
      // ipBit(ip, 3) ||
      ipBit(ip, 4) ||
      // ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      // ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      // ipBit(ip, 12) ||
      // ipBit(ip, 13) ||
      // ipBit(ip, 14) ||
      // ipBit(ip, 15) ||
      ipBit(ip, 16) ||
      ipBit(ip, 17) ||
      // ipBit(ip, 18) ||
      // ipBit(ip, 19) ||
      // ipBit(ip, 20) ||
      // ipBit(ip, 21) ||
      // ipBit(ip, 22) ||
      // ipBit(ip, 23) ||
      // ipBit(ip, 24) ||
      ipBit(ip, 25) ||
      // ipBit(ip, 26) ||
      ipBit(ip, 27) // ||
        ? // ipBit(ip, 28) ||
          // ipBit(ip, 29) ||
          // ipBit(ip, 30) ||
          // ipBit(ip, 31) ||
          // ipBit(ip, 32) ||
          // ipBit(ip, 33) ||
          // ipBit(ip, 34) ||
          // ipBit(ip, 35)
          ` --seg${seg}`
        : '',
    (
      ip,
      seg // C
    ) =>
      // ipBit(ip, 0) ||
      ipBit(ip, 1) ||
      // ipBit(ip, 2) ||
      // ipBit(ip, 3) ||
      // ipBit(ip, 4) ||
      // ipBit(ip, 5) ||
      // ipBit(ip, 6) ||
      ipBit(ip, 7) ||
      // ipBit(ip, 8) ||
      // ipBit(ip, 9) ||
      // ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      // ipBit(ip, 12) ||
      ipBit(ip, 13) ||
      // ipBit(ip, 14) ||
      // ipBit(ip, 15) ||
      // ipBit(ip, 16) ||
      // ipBit(ip, 17) ||
      ipBit(ip, 18) ||
      ipBit(ip, 19) ||
      // ipBit(ip, 20) ||
      // ipBit(ip, 21) ||
      // ipBit(ip, 22) ||
      // ipBit(ip, 23) ||
      // ipBit(ip, 24) ||
      // ipBit(ip, 25) ||
      // ipBit(ip, 26) ||
      // ipBit(ip, 27) ||
      // ipBit(ip, 28) ||
      ipBit(ip, 29) ||
      // ipBit(ip, 30) ||
      // ipBit(ip, 31) ||
      // ipBit(ip, 32) ||
      // ipBit(ip, 33) ||
      ipBit(ip, 34) // ||
        ? // ipBit(ip, 35)
          ` --seg${seg}`
        : '',
    (
      ip,
      seg // D
    ) =>
      ipBit(ip, 0) ||
      // ipBit(ip, 1) ||
      ipBit(ip, 2) ||
      // ipBit(ip, 3) ||
      // ipBit(ip, 4) ||
      // ipBit(ip, 5) ||
      // ipBit(ip, 6) ||
      // ipBit(ip, 7) ||
      // ipBit(ip, 8) ||
      // ipBit(ip, 9) ||
      // ipBit(ip, 10) ||
      // ipBit(ip, 11) ||
      // ipBit(ip, 12) ||
      // ipBit(ip, 13) ||
      // ipBit(ip, 14) ||
      // ipBit(ip, 15) ||
      // ipBit(ip, 16) ||
      // ipBit(ip, 17) ||
      // ipBit(ip, 18) ||
      // ipBit(ip, 19) ||
      // ipBit(ip, 20) ||
      // ipBit(ip, 21) ||
      // ipBit(ip, 22) ||
      // ipBit(ip, 23) ||
      // ipBit(ip, 24) ||
      // ipBit(ip, 25) ||
      // ipBit(ip, 26) ||
      // ipBit(ip, 27) ||
      // ipBit(ip, 28) ||
      // ipBit(ip, 29) ||
      // ipBit(ip, 30) ||
      ipBit(ip, 31) ||
      ipBit(ip, 32) ||
      ipBit(ip, 33) ||
      // ipBit(ip, 34) ||
      ipBit(ip, 35)
        ? ` --seg${seg}`
        : '',
    (
      ip,
      seg // E
    ) =>
      // ipBit(ip, 0) ||
      // ipBit(ip, 1) ||
      // ipBit(ip, 2) ||
      ipBit(ip, 3) ||
      // ipBit(ip, 4) ||
      ipBit(ip, 5) ||
      // ipBit(ip, 6) ||
      // ipBit(ip, 7) ||
      // ipBit(ip, 8) ||
      // ipBit(ip, 9) ||
      // ipBit(ip, 10) ||
      // ipBit(ip, 11) ||
      // ipBit(ip, 12) ||
      // ipBit(ip, 13) ||
      // ipBit(ip, 14) ||
      // ipBit(ip, 15) ||
      // ipBit(ip, 16) ||
      // ipBit(ip, 17) ||
      // ipBit(ip, 18) ||
      // ipBit(ip, 19) ||
      ipBit(ip, 20) ||
      // ipBit(ip, 21) ||
      // ipBit(ip, 22) ||
      ipBit(ip, 23) ||
      // ipBit(ip, 24) ||
      // ipBit(ip, 25) ||
      ipBit(ip, 26) ||
      ipBit(ip, 27) ||
      ipBit(ip, 28) ||
      // ipBit(ip, 29) ||
      // ipBit(ip, 30) ||
      // ipBit(ip, 31) ||
      ipBit(ip, 32) ||
      ipBit(ip, 33) //  ||
        ? // ipBit(ip, 34) ||
          // ipBit(ip, 35)
          ` --seg${seg}`
        : '',
    (
      ip,
      seg // F
    ) =>
      ipBit(ip, 0) ||
      ipBit(ip, 1) ||
      ipBit(ip, 2) ||
      ipBit(ip, 3) ||
      // ipBit(ip, 4) ||
      ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      // ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      // ipBit(ip, 9) ||
      // ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      ipBit(ip, 12) ||
      ipBit(ip, 13) ||
      ipBit(ip, 14) ||
      // ipBit(ip, 15) ||
      ipBit(ip, 16) ||
      // ipBit(ip, 17) ||
      ipBit(ip, 18) ||
      // ipBit(ip, 19) ||
      // ipBit(ip, 20) ||
      ipBit(ip, 21) ||
      // ipBit(ip, 22) ||
      // ipBit(ip, 23) ||
      ipBit(ip, 24) ||
      // ipBit(ip, 25) ||
      ipBit(ip, 26) ||
      // ipBit(ip, 27) ||
      ipBit(ip, 28) ||
      // ipBit(ip, 29) ||
      ipBit(ip, 30) ||
      // ipBit(ip, 31) ||
      // ipBit(ip, 32) ||
      // ipBit(ip, 33) ||
      // ipBit(ip, 34) ||
      ipBit(ip, 35)
        ? ` --seg${seg}`
        : ''
  ];
  document.querySelector('section').addEventListener('change', evt => {
    const input = decToBin(evt.target['value']);
    sevenSeg.className = `sixteen-seg${segMap
      .map((segmnt, idx) => segmnt(input, idx.toString(16).toUpperCase()))
      .join('')}`;
  });
})();

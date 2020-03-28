# sixteen-seg-display
16-Segment Display Emulator
---
This is a follow-on from my [seven-segment display emulator project](https://github.com/TracyGJG/seven-seg-display/blob/master/README.md).

In this edition the segments are arranged as follows:

     --0-- --7--        0: Top-left horizontal        7: Top-right horizontal
    |\    |    /|       1: Top-left vertical          8: Top Vertical
    1  9  8  A  2       2: Top-right vertical         9: Top-left Diagonal
    |   \ | /   |       3: Middle-left horizontal     A: Top-right Diagonal
     --3-- --B--        4: Bottom-left vertical       B: Middle-right horizontal
    |   / | \   |       5: Bottom-right vertical      C: Bottom Vertical
    4  D  C  E  5       6: Bottom-left horizontal     D: Bottom-left Diagonal
    |/    |    \|                                     E: Bottom-right Diagonal
     --6-- --F--                                      F: Bottom-right horizontal

This arrangement enables all ten digits and all 26 letters to be presented.

[![Netlify Status](https://api.netlify.com/api/v1/badges/3453fa36-4b33-46fa-a86e-e7e8fc3d4caa/deploy-status)](https://app.netlify.com/sites/sixteen-segment-display-emulator/deploys)

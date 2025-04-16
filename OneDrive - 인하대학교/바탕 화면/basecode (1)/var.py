import numpy as np

EYE = np.array([0, 0, 5], dtype=np.float32)
AT = np.array([0, 0, 0], dtype=np.float32)
UP = np.array([0, 1, 0], dtype=np.float32)
FOVY = 45
ASPECT = 1200 / 800
NEAR = 0.1
FAR = 100.0

LIGHT = np.array([0, 1, 3], dtype=np.float32)
S_D = np.array([1.0, 1.0, 1.0], dtype=np.float32)
S_S = np.array([0.8, 0.8, 0.8], dtype=np.float32)
S_A = np.array([0.1, 0.1, 0.1], dtype=np.float32)
SH = 4.0

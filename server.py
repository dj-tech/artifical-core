#questo è un server web in python
from django
#creiamo l' interfaccia grafica
import pygame
#avviamo l'arduino
class AnalogPlot:
        # constructor    
        def __init__(self, strPort, maxLen):        
                # open serial portu         
                self.ser = serial.Serial(strPort, 9600)v         
                self.a0Vals = deque([0.0]*maxLen)w         
                self.a1Vals = deque([0.0]*maxLen)


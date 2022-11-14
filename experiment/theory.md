# Theory


### Rectification


<div align="center">
<img src="images/rectifier.png" width="50%">
<p>Figure 1  </p>
</div>
A rectifier is a device that converts alternating current (AC) to direct current (DC), a process known as rectification. Rectifiers are essentially of two types – a half wave rectifier and a full wave rectifier.

### Full Wave Rectifier

A full-wave rectifier is exactly the same as the half-wave, but allows unidirectional current through the load during the entire sinusoidal cycle (as opposed to only half the cycle in the half-wave). A full-wave rectifier converts the whole of the input waveform to one of constant polarity (positive or negative) at its output. Let us see our half wave rectifier example and deduce the circuit.


<div align="center">
<img src="images/fullwavrec.png" width="50%">
<p>Figure 2  </p>
</div>
For a half wave Rectifier this is what we have observed


<div align="center">
<img src="images/fullwavrcshft.png" width="50%">
<p>Figure 3  </p>
</div>

If we change the phase of the input waveform by 180 degrees
<div align="center">
<img src="images/fullwavshft1rc.png" width="50%">
<p>Figure 4  </p>
</div>

Now if we add these two circuits, we would get


<div align="center">
<img src="images/fullwavcmbrc.png" width="50%">
<p>Figure 5  </p>
</div>

### Full Wave Rectifier - Circuit

So, we have seen that this rectifier circuit consists of two sources which have a phase difference along with two diodes. When V1 is positive, V2 is negative. Hence the top diode(D1) will be a short and the bottom diode(D2) will be an open. On the other hand, when V1 is negative, V2 is positive. Hence the bottom diode(D2) will be on and the top diode(D1) will be an open circuit.


<div align="center">
<img src="images/fullwavreccrt.png" width="50%">
<p>Figure 6  </p>
</div>

### Full Wave Rectifier – Waveforms

<div align="center">
<img src="images/fullwavg1.png" width="50%">
<p>Figure 7  </p>
</div>

<div align="center">
<img src="images/fullwavg2.png" width="50%">
<p>Figure 8  </p>
</div>
<div align="center">
<img src="images/fullwavg3.png" width="50%">
<p>Figure 9  </p>
</div>

The resulting waveform of the schematic is shown above. This configuration is rarely used because sometimes it may be impractical to obtain two voltage sources and it is difficult to SYNC the sources. Let us see how a single source can be used.

### Full Wave Rectifier – Center Tapped Transformer

A Full-Wave Rectifier can be constructed using Center-Tapped transformer – which give us two shifted sinusoids so that exactly one of the waveforms is positive at one time and two diodes. As compared to the half wave rectifier we use two diodes instead of one, one of the two diodes remains in conduction in both of the half cycles. At any point in time, only one of the diodes is forward biased. This allows for continuous conduction through load.

<div align="center">
<img src="images/fullr8.png" width="30%">
<p>Figure 10  </p>
</div>

<div align="center">
<img src="images/fullr9.png" width="30%">
<p>Figure 11  </p>
</div>

$$\frac{N_p}{N_s} =\frac{V_p}{V_s}= \frac{1}{2}$$

$$V_S=2V_I$$

### Center Tapped Transformer – Positive cycle
<div align="center">
<img src="images/cntrwvp.png" width="50%">
<p>Figure 12  </p>
</div>

For Positive Cycle D1 is Forward Biased and D2 is Reverse Biased

$$V_I−V_O=0$$

$$⇒V_O=V_I$$

### Center Tapped Transformer– Negative cycle

<div align="center">
<img src="images/cntrwvn.png" width="50%">
<p>Figure 13  </p>
</div>
For Negative Cycle D1 is Reversed Biased and D2 is Forward Biased

$$V_I−V_O=0$$

$$⇒V_O=V_I$$

### Bridge Rectifier

Bridge rectifier uses 4 rectifying diodes connected in a "bridged" configuration to produce the desired output but does not require a special centre tapped transformer, thereby reducing its size and cost. The single secondary winding is connected to one side of the diode bridge network and the load to the other side as shown below.

<div align="center">
<img src="images/fullwaverecbridgeckt.png" width="50%">
<p>Figure 14  </p>
</div>



### Bridge Rectifier – Positive Half Cycle

During the positive half cycle of the supply diodes D1 and D2 conduct in series while diodes D3 and D4 are reverse biased (ideally they can be replaced with open circuits) and the current flows through the load as shown below.


<div align="center">
<img src="images/fullwvrp.png" width="50%">
<p>Figure 15  </p>
</div>

For Positive Half Cycle D1 and D2 is Forward Biased and D3 and D4 is Reverse Biased.

$$V_I−V_O=0$$

$$⇒V_O=V_I$$

$$V_O=V_I−2×V_b$$

$$V_O=V_I−2×V_b−2×I_{rd}$$

where,
$$V_I$$ is the input voltage,
$$V_b$$ is barrier potential,
rd is diode resistance

### Bridge Rectifier – Negative Half Cycle

During the negative half cycle of the supply, diodes D3 and D4 conduct in series, but diodes D1 and D2 switch of as they are now reverse biased. The current flowing through the load is the same direction as before.
<div align="center">
<img src="images/fullwvrn.png" width="50%">
<p>Figure 16  </p>
</div>
For Negative Half Cycle D1 and D2 is Reverse Biased and D3 and D4 is Forward Biased.

$$V_I−V_O=0$$

$$⇒V_O=V_I$$


### Average DC Load Voltage

$$V_O=V_m×sinwt$$ for $$0≤wt≤π$$

$$V_{av}=V_{dc}=\frac{2V_m}{π}$$

### Average Load Current

$$I_{av}=\frac{V_{av}}{R}=\frac{2×V_m}{π×R}$$

$$I_{av}=\frac{2×I_m}{R}$$

### RMS Load Current

$$I=I_m×sinwt$$ for $$0≤wt≤π$$

$$I_{rms}=\frac{I_m}{\sqrt{2}}$$

### RMS Load Voltage
$$V_{rms}=I_{rms}×R=\frac{I_m}{\sqrt{2}}×R$$

$$V_{rms}=\frac{V_m}{\sqrt{2}}$$

**Form factor:** It is defined as the ratio of rms load voltage and average load voltage.

$$F.F=\frac{V_{rms}}{V_{av}}$$

$$F.F=\frac{\frac{V_m}{\sqrt{2}}}{\frac{(2×V_m)}{π}}=\frac{π}{2\sqrt{2}}=1.11$$

$$F.F \geq 1$$

### Ripple Factor

$$\gamma= \sqrt ({F.F}^2-1 )\times 100\%$$

$$\gamma=\sqrt ({1.11}^2-1) \times 100\%=48.1\%$$

Efficiency:It is defined as ratio of dc power available at the load to the input ac power.

n%=$$\frac{P_{load}}{P_{in}$$×100%

$$n\%=\frac{(I_{dc}^2×R)}{(I_{rms}^2×R)}×100\%$$

$$n\%=\frac{\frac {4 \times I_{m}^2}{\pi^2}}{\frac{I_{m}^2}{2}}\times 100\%=\frac{8}{\pi^2}\times 100\% =81.13$$

### Peak Inverse Volatge

For rectifier applications, peak inverse voltage (PIV) or peak reverse voltage (PRV) is the maximum value of reverse voltage which occurs at the peak of the input cycle when the diode is reverse-biased.The portion of the sinusoidal waveform which repeats or duplicates itself is known as the cycle. The part of the cycle above the horizontal axis is called the positive half-cycle, the part of the cycle below the horizontal axis is called the negative half cycle. With reference to the amplitude of the cycle, the peak inverse voltage is specified as the maximum negative value of the sine-wave within a cycle's negative half cycle.

For Bridge Rectifier,
D1 and D2 is Forward Biased
D3 and D4 is Reverse Biased

$$V_m-V_O=0$$

$$\Rightarrow V_O=V_m$$

$$V_O+PIV=0$$

$$PIV=V_m$$

$$PIV \geq V_m$$

For Center Tapped Rectifier,
D2 is Forward Biased,
PIV at D1,

$$V_m−V_O=0$$
 

$$\Rightarrow V_O=V_m$$

$$V_O−PIV+V_m$$

$$⇒PIV=2V_m$$

$$PIV \geq 2Vm$$

### Note

An alternative representation of full-wave bridge rectifier circuit is easier both to remember and to comprehend. It's the exact same circuit, except all diodes are drawn in a horizontal attitude, all “pointing” the same direction.

<div align="center">
<img src="images/fullwvnew.png" width="50%">
<p>Figure 17  </p>
</div>

### Oscilloscope Tutorial

An oscilloscope displays a voltage waveform versus time and has the following components:
1. a screen to display a waveform,
2. input jacks for connecting the signal to be displayed,
3. dials to control how the signal will be displayed.


The screen is cathode ray tube found in most television sets where the face of the screen is divided up into a 2 dimensional grid (or axes or scale); In this experiment we consider 8x10 grid. The vertical grid is divided up into 8 (major) divisions and the horizontal grid is divided into 10 major divisions. To improve the precision, each of these divisions is further broken up into 5 minor divisions. The horizontal axis (X-axis) represents time and the vertical axis (Y-axis) represents voltage. The scope displays (also called a signal trace or trace) the input signal voltage along the vertical (or Y-axis) while an internally generated signal (called the horizontal sweep or sweep signal) is simultaneously produced along the X-axis creating a 2- dimensional time trace of the input signal.

<div align="center">
<img src="images/oscilloscope.png" width="50%">
<p>Figure 18  </p>
</div>

volts/div- This control lets you change how many volts are represented by each vertical increment of grid (vertical axis) on the screen. Basically, it allows you to zoom in and out along the y axis.

time/div- This control lets you change how much time is represented by each horizontal increment of the grid overlay on the screen. It allows you to zoom in and out along the x axis.

If volt/div is set to 1 volt which implies each mazor vertical division is 1 volt where as each minor vertical division is 0.2 volt. And time/div is set to 0.1ms/div which implies each maor horiontal division is 0.1ms. Voltage on the vertical scale is 1 volt/div multiply by (number of division). Time on the horizontalscale is 0.1msec multiply by (number of division). In the figure 19, 1 volt/div and amplitude of the input signal is 1 volt. Here 0.1mses/div, the frequency is 1 kHz and its period is 1 complete cycle in 1m sec.

<div align="center">
<img src="images/oscilloscope_1vd.png" width="50%">
<p>Figure 19  </p>
</div>

In the figure 20, if volt/div is set to 2volt/div, which implies each mazor division is 2 volt where as each minor division is 0.5volt.

<div align="center">
<img src="images/oscilloscope_2vd.png" width="50%">
<p>Figure 20  </p>
</div>

**Note:** Note: If you set the Volts/Div too low, you’ll clip the signal. Similarly, setting it too high, and you’ll won’t find the signal, i.e. the signal will b flat. ncreasing the Timebase will display more cycles of a periodic signal. Conversely, reducing the Timebase, fewer cycles will be displayed.

Virtual Oscilloscope Tutorial : [Oscilloscope Tutorial](http://vlabs.iitkgp.ac.in/be/exp7/content/Oscilloscope%20Tutorial_fullwave.pdf)

<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
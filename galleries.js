var galleries = {
            pdp11: [
                            {src:"/images/pdp11/racks.jpg", w:2448, h:3264, title:"H960 racks: the backbones"},
                            {src:"/images/pdp11/kb11a-backplane.jpg", w:2448, h:2448, title:"KB11-A CPU backplane"},
                            {src:"/images/pdp11/rk11c.jpg", w:2448, h:2448, title:"RK11-C disk controller backplane"},
                            {src:"/images/pdp11/rk05-help.png", w:1340, h:339, title:"Help getting the RK05 drives off the floor -- thanks, Chris!"},
                            {src:"/images/pdp11/861.jpg", w:2448, h:3264, title:"H861 AC power controller"},
                            {src:"/images/pdp11/h742-teardown.jpg", w:2448, h:2448, title:"Tearing down the H742 power supplies"},
                            {src:"/images/pdp11/h742-corrosion.jpg", w:2448, h:2448, title:"Corrosion on part of an H742 chassis, to be sanded and painted"},
                            {src:"/images/pdp11/cpu-cabinet.jpg", w:2448, h:2448, title:"CPU cabinet getting some touch-up paint after sanding corroded spots"},
                            {src:"/images/pdp11/pwr-ctrls.jpg", w:3264, h:2448, title:"H742 power controller boards"},
                            {src:"/images/pdp11/chassis-with-fans.jpg", w:2448, h:3264, title:"CPU cabinet with restored cooling fans"},
                            {src:"/images/pdp11/742-rebuild.jpg", w:3264, h:2448, title:"Deeper into the H742s for cleaning, sanding, and painting"},
                            {src:"/images/pdp11/742s-mounted.jpg", w:2448, h:2448, title:"H742s and CPU cabinet remounted"},
                            {src:"/images/pdp11/front-panel.jpg", w:2448, h:3264, title:"Front panel remounted -- starting to look like a real PDP-11!"},
                            {src:"/images/pdp11/boards-in-chassis.jpg", w:2448, h:2448, title:"CPU and MMU logic installed.  Empty slots on the right are for the FPU."},
                            {src:"/images/pdp11/board-with-crystals.jpg", w:2448, h:2448, title:"Logic board with crystals after several decades of storage"},
                            {src:"/images/pdp11/crystals.jpg", w:2448, h:2448, title:"Closeup of crystals on logic board"},
                            {src:"/images/pdp11/knuckles.jpg", w:2448, h:2448, title:"The characteristic bloody knuckles that are obtained whenever wrestling with PDP backplanes, logic cards, and terminators in close confines"},
                            {src:"/images/pdp11/vt52.jpg", w:2448, h:2448, title:"VT52 hooked up to a Linux VM for a test drive"},
                            {src:"/images/pdp11/rom-scanner.jpg", w:2448, h:2448, title:"Homemade FPGA ROM scanner used to read out the VT52 character generator ROM"},
                            {src:"/images/pdp11/boards-in-chassis-2.jpg", w:3264, h:2448, title:"Backplane and expansion populated with CPU, MMU, FPU, bootstrap ROM, console serial, 256K RAM, grant continuity cards and terminators"},
                            {src:"/images/pdp11/mr11-with-note.jpg", w:3264, h:2448, title:"A modified M792-YB bootstrap ROM, with a vintage note attached"},
                            {src:"/images/pdp11/mr11-bare.jpg", w:3264, h:2448, title:"M792-YB bootstrap ROM with note removed"},
                            {src:"/images/pdp11/harness-parts.jpg", w:3264, h:2448, title:"Wire, connectors, and crimp tool to get started on replacement power harness"},
                            {src:"/images/pdp11/harness-bench.jpg", w:3264, h:2448, title:"Partially completed replacement power harness"},
                            {src:"/images/pdp11/harness-progress.jpg", w:3264, h:2448, title:"Finishing up the replacement power harness in the rack"},
                            {src:"/images/pdp11/harness-complete.jpg", w:3264, h:2448, title:"Completed power harness from above rear"},
                            {src:"/images/pdp11/power-supplies.jpg", w:3264, h:2448, title:"Completed power harness from side"},
                            {src:"/images/pdp11/initial-power-on.jpg", w:3024, h:3024, title:"Initial power on!  No smoke, but all lights on (not right).  Well, it&#39;s a start!"},
                            {src:"/images/pdp11/power-lights.jpg", w:3024, h:3024, title:"Power supply with all regulator lamps repaired"},
                            {src:"/images/pdp11/km11.jpg", w:4032, h:3024, title:"Tom Uban KM11 replica, stuffed with parts and ready to go"},
                            {src:"/images/pdp11/km11-action.jpg", w:3024, h:4032, title:"Tom Uban KM11 replica in action"},
                            {src:"/images/pdp11/ms11-debug.jpg", w:4032, h:3024, title:"MS11 memory card debug in progress, with board extender, logic analyzer, and KM11"},
                            {src:"/images/pdp11/ms11-repaired.jpg", w:3024, h:3024, title:"MS11 with two bad 4116 RAMs pulled, socketed, and replaced"},
                            {src:"/images/pdp11/m9301-running.jpg", w:4032, h:3024, title:"VT52 attached, and running now in the M9301 bootstrap monitor!"},
                            {src:"/images/pdp11/pdp11gui.jpg", w:4032, h:3024, title:"PDP11GUI hooked up and running; ready to start downloading and running diagnostics"},
                            {src:"/images/pdp11/vt52-repair.jpg", w:3024, h:3024, title:"VT52 open for repairs with new clock oscillator installed"},
                            {src:"/images/pdp11/prom-programmer.jpg", w:3024, h:3024, title:"Data I/O series 22 PROM programmer, arrived from eBay"},
                            {src:"/images/pdp11/alu-prom-replaced.jpg", w:3024, h:3024, title:"GRA board with replaced ALU PROM"},
                            {src:"/images/pdp11/h720e-breakdown.jpg", w:4032, h:3024, title:"Tearing down the H720E power supply for the RK11 storage controller"},
                            {src:"/images/pdp11/h720e-leaking-cap.jpg", w:3024, h:3024, title:"Leaking tantalum cap on H720e regulator board"},
                            {src:"/images/pdp11/cabinets.jpg", w:3024, h:4032, title:"Cabinet side panels and decorative top panels cleaned and installed"},
                            {src:"/images/pdp11/basic.jpg", w:3024, h:3024, title:"Running papertape BASIC, loaded via PDP11GUI"},
                            {src:"/images/pdp11/720e-caps.jpg", w:3024, h:3024, title:"H720e regulator card with refreshed caps"},
                            {src:"/images/pdp11/rk11-racked.jpg", w:3024, h:4032, title:"RK11-C controller installed in rack, with temporary jumper hack for flown cap"},
                            {src:"/images/pdp11/bc11-good.jpg", w:3024, h:3024, title:"A BC11-A bus cable, with vintage label"},
                            {src:"/images/pdp11/rk11-back.jpg", w:3024, h:3024, title:"RK11-C controller from the back, flipchips and cabling visible"},
                            {src:"/images/pdp11/m203.jpg", w:3024, h:3024, title:"A failing M203, the cause of a stuck bit in RK11 register RKDB"},
                            {src:"/images/pdp11/rk05.jpg", w:4032, h:3024, title:"RK05 drive internals"},
                            {src:"/images/pdp11/h743.jpg", w:3024, h:3024, title:"H743 power supply pulled and on bench"},
                            {src:"/images/pdp11/rk05-lower-before.jpg", w:3024, h:3024, title:"First RK05 lower head before cleaning"},
                            {src:"/images/pdp11/rk05-lower-after.jpg", w:3024, h:3024, title:"First RK05 lower head after cleaning"},
                            {src:"/images/pdp11/rk05-upper-before.jpg", w:3024, h:3024, title:"First RK05 upper head before cleaning"},
                            {src:"/images/pdp11/rk05-upper-after.jpg", w:3024, h:3024, title:"First RK05 upder head after cleaning"},
                            {src:"/images/pdp11/lower-cover-abrasions.jpg", w:3024, h:3024, title:"Abrasions on first RK05 lower cover, from contact with spindle motor shafts"},
                            {src:"/images/pdp11/rk05-cartridge-foam.jpg", w:400, h:400, title:"Foam inside the hub of an RK05 pack -- could be bad news if this is decaying like other DEC foam..."},
                            {src:"/images/pdp11/rk05-running.jpg", w:3024, h:3024, title:"RK05 running offline from controller; pack spinning and heads loaded"},
                            {src:"/images/pdp11/BC11-woes.jpg", w:3024, h:3024, title:"A box of BC11-A cables to be sorted through..."},
                            {src:"/images/pdp11/rkdp-boot.jpg", w:3024, h:3024, title:"First boot off disk -- RKDP diagnostics pack!"},
                            {src:"/images/pdp11/G740.jpg", w:3024, h:3024, title:"G740 Disk Selection flipchip, jumpered for two drives"},
                            {src:"/images/pdp11/M9301.jpg", w:3024, h:3024, title:"M9301-YB bootstrap ROM"},
                            {src:"/images/pdp11/M792-YB.jpg", w:3024, h:3024, title:"M792-YB diode-matrix bootstrap ROM"},
                            {src:"/images/pdp11/rt11-boots.jpg", w:4032, h:3024, title:"At long last: RT-11 boots from an RK05 pack!"},
                            {src:"/images/pdp11/rk05-packs.jpg", w:3024, h:3024, title:"Some of the RK05 packs obtained in a surplus auction downstream of Stanford&#39;s Hansen Experimental Physics Lab"},
                            {src:"/images/pdp11/head-crashes.jpg", w:3024, h:4032, title:"An RK05 disk platter with obvious head crashes"},
                            {src:"/images/pdp11/gravity-pack.jpg", w:4032, h:3024, title:"RK05 pack spinning in drive with heads loaded"},
                            {src:"/images/pdp11/vt52-guts.jpg", w:4032, h:3024, title:"VT52 with logic boards and keyboard removed"},
                            {src:"/images/pdp11/vt52-keys.jpg", w:4032, h:3024, title:"VT52 keyboard under test, powered from bench supply"},
                            {src:"/images/pdp11/rt11-adventure.jpg", w:3024, h:3024, title:"VT52 test drive with RT-11 Adventure"},
                            {src:"/images/pdp11/la30-cap.jpg", w:3024, h:3024, title:"PCB-containing cap from ferro-resonant supply; to be replaced"},
                            {src:"/images/pdp11/la30-supply.jpg", w:4032, h:3024, title:"LA30 H735 supply, pulled to bench for clean/refurb"},
                            {src:"/images/pdp11/la30-cards.jpg", w:3024, h:3024, title:"LA30 internal controller card cage"},
                            {src:"/images/pdp11/la30-head.jpg", w:3024, h:3024, title:"LA30 print head"},
                            {src:"/images/pdp11/la30-carriage.jpg", w:4032, h:3024, title:"LA30 carriage, disassembled for clean, repairs, and lube.  A mangled paper drag spring is visible on the print bar assembly."},
                            {src:"/images/pdp11/la30-cleaned.jpg", w:4032, h:3024, title:"LA30 cleaned and reassembled"},
                            {src:"/images/pdp11/kr2736.jpg", w:4032, h:3024, title:"The SMC KR2736-17 keyboard scanner/encoder in the LA30"},
                            {src:"/images/pdp11/G380.jpg", w:4032, h:3024, title:"G380 solenoid driver card from the LA30, with failed parts pulled"},
                    ],
    };

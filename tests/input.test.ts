const input = `
events
    doorClosed   D1CL
    drawerOpened D2OP
    lightOn      L1ON
    doorOpened   D1OP
    panelClosed  PNCL
end

resetEvents
    doorOpened
end

commands
    unlockPanel PNUL
    lockPanel   PNLK
    lockDoor    D1LK
    unlockDoor  D1UL
end

state idle
    actions {unlockDoor lockPanel}
    doorClosed => active
end

state active
    drawerOpened => waitingForLight
    lightOn => waitingForDrawer
end

state waitingForLight
    lightOn => unlockedPanel
end

state waitingForDrawer
    drawerOpened => unlockedPanel
end

state unlockedPanel
    actions {unlockPanel lockDoor}
    panelClosed => idle
end
`;

export {
    input
}
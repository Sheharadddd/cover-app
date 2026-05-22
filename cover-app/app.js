// Advanced Vector Geometry
const charPaths = {
    'A': [['M',0.5,0], ['L',0,1], ['M',0.5,0], ['L',1,1], ['M',0.166,0.666], ['L',0.833,0.666]],
    'B': [['M',0,1], ['L',0,0], ['L',0.6,0], ['Q',1,0, 1,0.25], ['Q',1,0.5, 0.6,0.5], ['L',0,0.5], ['M',0.6,0.5], ['Q',1,0.5, 1,0.75], ['Q',1,1, 0.6,1], ['L',0,1]],
    'C': [['M',1,0.2], ['Q',1,0, 0.5,0], ['Q',0,0, 0,0.5], ['Q',0,1, 0.5,1], ['Q',1,1, 1,0.8]],
    'D': [['M',0,1], ['L',0,0], ['L',0.5,0], ['Q',1,0, 1,0.5], ['Q',1,1, 0.5,1], ['L',0,1]],
    
    // E & F Mathematically precise exactly as requested.
    'E': [['M',0,0], ['L',0,1], ['M',0,0], ['L',1,0], ['M',0,0.5], ['L',0.666,0.5], ['M',0,1], ['L',1,1]],
    'F': [['M',0,0], ['L',0,1], ['M',0,0], ['L',1,0], ['M',0,0.5], ['L',0.666,0.5]],
    
    'G': [['M',1,0.2], ['Q',1,0, 0.5,0], ['Q',0,0, 0,0.5], ['Q',0,1, 0.5,1], ['Q',1,1, 1,0.5], ['L',0.5,0.5]],
    'H': [['M',0,0], ['L',0,1], ['M',1,0], ['L',1,1], ['M',0,0.5], ['L',1,0.5]],
    'I': [['M',0,0], ['L',0,1]],
    'J': [['M',1,0], ['L',1,0.7], ['Q',1,1, 0.5,1], ['Q',0,1, 0,0.7]],
    'K': [['M',0,0], ['L',0,1], ['M',0,0.666], ['L',1,0], ['M',0.333,0.444], ['L',1,1]],
    'L': [['M',0,0], ['L',0,1], ['L',1,1]],
    'M': [['M',0,1], ['L',0,0], ['L',0.5,1], ['L',1,0], ['L',1,1]],
    'N': [['M',0,1], ['L',0,0], ['L',1,1], ['L',1,0]],
    'O': [['M',0.5,0], ['Q',1,0, 1,0.5], ['Q',1,1, 0.5,1], ['Q',0,1, 0,0.5], ['Q',0,0, 0.5,0]],
    'P': [['M',0,1], ['L',0,0], ['L',0.5,0], ['Q',1,0, 1,0.25], ['Q',1,0.5, 0.5,0.5], ['L',0,0.5]],
    'Q': [['M',0.5,0], ['Q',1,0, 1,0.5], ['Q',1,1, 0.5,1], ['Q',0,1, 0,0.5], ['Q',0,0, 0.5,0], ['M',0.5,0.5], ['L',1,1]],
    'R': [['M',0,1], ['L',0,0], ['L',0.5,0], ['Q',1,0, 1,0.25], ['Q',1,0.5, 0.5,0.5], ['L',0,0.5], ['M',0.5,0.5], ['L',1,1]],
    'S': [['M',1,0.2], ['Q',1,0, 0.5,0], ['Q',0,0, 0,0.25], ['Q',0,0.5, 0.5,0.5], ['Q',1,0.5, 1,0.75], ['Q',1,1, 0.5,1], ['Q',0,1, 0,0.8]],
    'T': [['M',0,0], ['L',1,0], ['M',0.5,0], ['L',0.5,1]],
    'U': [['M',0,0], ['L',0,0.7], ['Q',0,1, 0.5,1], ['Q',1,1, 1,0.7], ['L',1,0]],
    'V': [['M',0,0], ['L',0.5,1], ['L',1,0]],
    'W': [['M',0,0], ['L',0,1], ['M',1,0], ['L',1,1], ['M',0,1], ['L',0.5,0], ['M',1,1], ['L',0.5,0]],
    'X': [['M',0,0], ['L',1,1], ['M',1,0], ['L',0,1]],
    'Y': [['M',0,0], ['L',0.5,0.5], ['L',1,0], ['M',0.5,0.5], ['L',0.5,1]],
    'Z': [['M',0,0], ['L',1,0], ['L',0,1], ['L',1,1]],
    '0': [['M',0.5,0], ['Q',1,0, 1,0.5], ['Q',1,1, 0.5,1], ['Q',0,1, 0,0.5], ['Q',0,0, 0.5,0]],
    '1': [['M',0,0], ['L',0,1]],
    '2': [['M',0,0.2], ['Q',0,0, 0.5,0], ['Q',1,0, 1,0.3], ['Q',1,0.6, 0,1], ['L',1,1]],
    '3': [['M',0,0.2], ['Q',0,0, 0.5,0], ['Q',1,0, 1,0.25], ['Q',1,0.5, 0.5,0.5], ['Q',1,0.5, 1,0.75], ['Q',1,1, 0.5,1], ['Q',0,1, 0,0.8]],
    '4': [['M',0.666,0], ['L',0.666,1], ['M',0,0.666], ['L',1,0.666], ['M',0.666,0], ['L',0,0.666]],
    '5': [['M',1,0], ['L',0,0], ['L',0,0.333], ['L',0.5,0.333], ['Q',1,0.333, 1,0.666], ['Q',1,1, 0.5,1], ['Q',0,1, 0,0.8]],
    
    // Perfectly arching loops closing smoothly exactly at Y=0.5
    '6': [['M',0.8,0], ['Q',0,0, 0,0.5], ['Q',0,1, 0.5,1], ['Q',1,1, 1,0.75], ['Q',1,0.45, 0.5,0.45], ['Q',0,0.45, 0,0.5]],
    '7': [['M',0,0], ['L',1,0], ['L',0.5,1]],
    '8': [['M',0.5,0.5], ['Q',1,0.5, 1,0.25], ['Q',1,0, 0.5,0], ['Q',0,0, 0,0.25], ['Q',0,0.5, 0.5,0.5], ['Q',1,0.5, 1,0.75], ['Q',1,1, 0.5,1], ['Q',0,1, 0,0.75], ['Q',0,0.5, 0.5,0.5]],
    '9': [['M',0.2,1], ['Q',1,1, 1,0.5], ['Q',1,0, 0.5,0], ['Q',0,0, 0,0.25], ['Q',0,0.55, 0.5,0.55], ['Q',1,0.55, 1,0.5]],
    
    '/': [['M',1,0], ['L',0,1]],
    '-': [['M',0.2,0.5], ['L',0.8,0.5]],
    '.': [['DOT']]
};

class Renderer {
    constructor(type, context) {
        this.type = type;
        this.ctx = context;
        this.curX = 0;
        this.curY = 0;
    }

    setStyle() {
        if (this.type === 'canvas') {
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 0.3;
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';
        } else {
            this.ctx.setDrawColor(0, 0, 0);
            this.ctx.setLineWidth(0.3);
            this.ctx.setLineCap(1);
            this.ctx.setLineJoin(1);
        }
    }

    beginPath() {
        if (this.type === 'canvas') this.ctx.beginPath();
    }

    stroke() {
        if (this.type === 'canvas') this.ctx.stroke();
    }

    moveTo(x, y) {
        this.curX = x;
        this.curY = y;
        if (this.type === 'canvas') this.ctx.moveTo(x, y); 
    }

    lineTo(x, y) {
        if (this.type === 'canvas') {
            this.ctx.lineTo(x, y);
        } else {
            this.ctx.line(this.curX, this.curY, x, y);
        }
        this.curX = x; this.curY = y; 
    }

    quadCurveTo(cx, cy, x, y) {
        if (this.type === 'canvas') {
            this.ctx.quadraticCurveTo(cx, cy, x, y);
            this.curX = x;
            this.curY = y;
        } else {
            const steps = 40;
            const x1 = this.curX;
            const y1 = this.curY;
            let prevX = x1; let prevY = y1; 
            for (let i = 1; i <= steps; i++) { 
                const t = i / steps; const u = 1 - t; 
                const xt = u * u * x1 + 2 * u * t * cx + t * t * x; 
                const yt = u * u * y1 + 2 * u * t * cy + t * t * y; 
                this.ctx.line(prevX, prevY, xt, yt); 
                prevX = xt; prevY = yt; 
            } 
            this.curX = x; this.curY = y; 
        } 
    }

    drawRect(x, y, w, h) {
        if (this.type === 'canvas') {
            this.ctx.rect(x, y, w, h);
        } else {
            this.ctx.rect(x, y, w, h, 'S');
        }
    }

    drawDot(x, y, radius) {
        if (this.type === 'canvas') {
            this.ctx.beginPath();
            this.ctx.fillStyle = '#000000';
            this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
            this.ctx.fill();
        } else {
            this.ctx.setFillColor(0, 0, 0);
            this.ctx.circle(x, y, radius, 'F');
        }
    }
}

function getCharWidth(char, defaultW) {
    if (char === 'I' || char === '1') return 0;
    if (char === '.' || char === '/') return 1;
    return defaultW;
}

function getCharacterSpacing(currentChar, nextChar, defaultSpacing) {
    return defaultSpacing;
}

function calculateWidth(text, letterW, charSp, wordSp) {
    if (!text) return 0;
    text = text.toUpperCase();
    let width = 0;

    for (let i = 0; i < text.length; i++) {
        const currentChar = text[i];
        const nextChar = text[i + 1];

        if (currentChar === ' ') { 
            width += (wordSp - charSp); 
        } else { 
            width += getCharWidth(currentChar, letterW); 
            if (i < text.length - 1) { width += getCharacterSpacing(currentChar, nextChar, charSp); } 
        } 
    }
    return Math.max(0, width);
}

function wrapText(text, maxW, letterW, charSp, wordSp) {
    const explicitLines = text.split('\n');
    const lines = [];

    explicitLines.forEach(eLine => {
        const words = eLine.split(' ').filter(w => w.length > 0);
        if (words.length === 0) { lines.push(""); return; } 
        let curLine = ""; 
        words.forEach(word => { 
            if (calculateWidth(word, letterW, charSp, wordSp) > maxW) { 
                if (curLine.length > 0) { lines.push(curLine); curLine = ""; } 
                let tempWord = ""; 
                for (const char of word) { 
                    const testWord = tempWord.length === 0 ? char : tempWord + char; 
                    if (calculateWidth(testWord, letterW, charSp, wordSp) > maxW) { 
                        lines.push(tempWord); tempWord = char; 
                    } else { 
                        tempWord = testWord; 
                    } 
                } 
                curLine = tempWord; 
            } else { 
                const testLine = curLine.length === 0 ? word : curLine + " " + word; 
                if (calculateWidth(testLine, letterW, charSp, wordSp) > maxW) { 
                    lines.push(curLine); curLine = word; 
                } else { 
                    curLine = testLine; 
                } 
            } 
        }); 
        if (curLine.length > 0) lines.push(curLine); 
    });

    return lines;
}

function drawText(engine, text, startX, startY, letterW, letterH, charSp, wordSp) {
    let currentX = startX;
    text = text.toUpperCase();

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextChar = text[i + 1];

        if (char === ' ') { currentX += (wordSp - charSp); continue; } 
        
        const cw = getCharWidth(char, letterW); 
        const path = charPaths[char]; 
        
        if (path) { 
            if (path[0][0] === 'DOT') { 
                engine.drawDot(currentX + 0.5, startY + letterH - 0.5, 0.375); 
            } else { 
                engine.beginPath(); 
                path.forEach(cmd => { 
                    const type = cmd[0]; 
                    const mw = (char === 'I' || char === '1') ? 0 : (char === '.' || char === '/') ? 1 : letterW; 
                    if (type === 'M') { 
                        engine.moveTo(currentX + cmd[1] * mw, startY + cmd[2] * letterH); 
                    } else if (type === 'L') { 
                        engine.lineTo(currentX + cmd[1] * mw, startY + cmd[2] * letterH); 
                    } else if (type === 'Q') { 
                        engine.quadCurveTo( currentX + cmd[1] * mw, startY + cmd[2] * letterH, currentX + cmd[3] * mw, startY + cmd[4] * letterH ); 
                    } 
                }); 
                engine.stroke(); 
            } 
        } 
        currentX += cw; 
        if (i < text.length - 1) { 
            currentX += getCharacterSpacing(char, nextChar, charSp); 
        } 
    }
}

function generateDocument(engine) {
    const margin = 12;
    const writableW = 186;

    engine.setStyle();
    engine.beginPath();
    engine.drawRect(margin, margin, writableW, 297 - (2 * margin));
    engine.stroke();

    const rawTitle = document.getElementById('title').value.trim() || 'EXPERIMENT NAME';
    const nameStr = document.getElementById('name').value.trim() || 'STUDENT NAME';
    const regStr = document.getElementById('regno').value.trim() || 'E NUMBER';
    const groupStr = document.getElementById('group').value.trim() || 'GROUP NO';
    const semStr = document.getElementById('semester').value.trim() || 'SEMESTER';
    const dateStr = document.getElementById('date').value.trim() || 'DD/MM/YYYY';

    const tH = 10;
    const tW = 8;
    const tCSp = 1;
    const tWSp = 8;
    const tLSp = 6;

    const titleLines = wrapText(rawTitle, writableW, tW, tCSp, tWSp);

    let ty = margin + ((220 - ((titleLines.length * tH) + ((titleLines.length - 1) * tLSp))) / 2);

    titleLines.forEach(line => {
        const cleanLine = line.trim();
        if (cleanLine.length > 0) { 
            const lw = calculateWidth(cleanLine, tW, tCSp, tWSp); 
            const tx = margin + ((writableW - lw) / 2); 
            drawText(engine, cleanLine, tx, ty, tW, tH, tCSp, tWSp); 
            engine.beginPath(); engine.moveTo(tx, ty + tH + 1); engine.lineTo(tx + lw, ty + tH + 1); engine.stroke(); 
        } 
        ty += tH + tLSp; 
    });

    const detailsRaw = [nameStr, regStr, groupStr, semStr, dateStr];
    const processedDetails = [];

    detailsRaw.forEach((text, index) => {
        const isName = index === 0;
        const cw = isName ? 4 : 3; const ch = isName ? 5 : 4; const ws = isName ? 4 : 3; const dist = 3; 
        const cleanText = text.trim(); const wrapped = wrapText(cleanText, 9999, cw, 1, ws); 
        processedDetails.push({ lines: wrapped, cw, ch, ws, dist }); 
    });

    const maxNameW = calculateWidth(processedDetails[0].lines[0], 4, 1, 4);
    const dx = (margin + writableW - 10) - maxNameW;

    let totalHeight = 0;
    processedDetails.forEach((item, i) => {
        item.lines.forEach((line, j) => {
            totalHeight += item.ch + 1;
            if (!(i === processedDetails.length - 1 && j === item.lines.length - 1)) { totalHeight += item.dist; } 
        }); 
    });

    let dy = (297 - margin - 15) - totalHeight;

    processedDetails.forEach((item, i) => {
        item.lines.forEach((line, j) => {
            const cleanLine = line.trim();
            if (cleanLine.length > 0) { 
                const lw = calculateWidth(cleanLine, item.cw, 1, item.ws); 
                drawText(engine, cleanLine, dx, dy, item.cw, item.ch, 1, item.ws); 
                engine.beginPath(); engine.moveTo(dx, dy + item.ch + 1); engine.lineTo(dx + lw, dy + item.ch + 1); engine.stroke(); 
            } 
            dy += item.ch + 1; 
            if (!(i === processedDetails.length - 1 && j === item.lines.length - 1)) { dy += item.dist; } 
        }); 
    });
}

function updateLivePreview() {
    const canvas = document.getElementById('preview-canvas');
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.scale(4, 4);

    generateDocument(new Renderer('canvas', ctx));
}

function executeDownload() {
    const errorBox = document.getElementById('error-box');
    errorBox.style.display = 'none';

    try {
        if (!window.jspdf || !window.jspdf.jsPDF) {
            throw new Error("Library not loaded. Please refresh the page.");
        }
        const { jsPDF } = window.jspdf; const doc = new jsPDF({ format: 'a4', unit: 'mm' }); 
        generateDocument(new Renderer('pdf', doc)); 
        const regVal = document.getElementById('regno').value.replace(/[^a-zA-Z0-9]/g, ''); 
        doc.save(`Cover_${regVal || 'Doc'}.pdf`); 
    } catch (error) {
        errorBox.textContent = error.message;
        errorBox.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const regInput = document.getElementById('regno');
    const semInput = document.getElementById('semester');
    const groupInput = document.getElementById('group');

    if (dateInput) {
        dateInput.setAttribute('inputmode', 'numeric');
        dateInput.setAttribute('pattern', '[0-9]*');
        dateInput.setAttribute('placeholder', 'DD/MM/YYYY');
    }

    function setupPrefixField(input, prefix) {
        input.addEventListener('focus', () => {
            if (input.value.trim() === '') {
                input.value = prefix;
                requestAnimationFrame(() => { input.setSelectionRange(prefix.length, prefix.length); }); 
            } 
        }); 
        input.addEventListener('keydown', e => { 
            const minLength = prefix.length; 
            if ( (e.key === 'Backspace' || e.key === 'Delete') && input.selectionStart <= minLength ) { e.preventDefault(); } 
        }); 
        input.addEventListener('click', () => { 
            const minLength = prefix.length; 
            if (input.selectionStart < minLength) { requestAnimationFrame(() => { input.setSelectionRange(minLength, minLength); }); } 
        }); 
    }

    setupPrefixField(regInput, 'E/');
    setupPrefixField(semInput, 'SEMESTER ');
    setupPrefixField(groupInput, 'GROUP ');

    dateInput.addEventListener('input', (e) => {
        if (e.inputType === 'deleteContentBackward') return;
        
        let val = dateInput.value;
        let raw = val.replace(/\D/g, ''); 
        
        if (raw.length === 1 && parseInt(raw[0]) > 3) { raw = '0' + raw[0]; } 
        else if (raw.length >= 2) {
            let day = parseInt(raw.substring(0, 2));
            if (day > 31) raw = '31' + raw.substring(2);
            if (day === 0) raw = '01' + raw.substring(2);
        }

        if (raw.length === 3 && parseInt(raw[2]) > 1) { raw = raw.substring(0, 2) + '0' + raw[2]; } 
        else if (raw.length >= 4) {
            let month = parseInt(raw.substring(2, 4));
            if (month > 12) raw = raw.substring(0, 2) + '12' + raw.substring(4);
            if (month === 0) raw = raw.substring(0, 2) + '01' + raw.substring(4);
        }

        raw = raw.slice(0, 8);
        let formatted = '';
        if (raw.length > 0) formatted += raw.substring(0, 2);
        if (raw.length >= 3) formatted += '/' + raw.substring(2, 4);
        if (raw.length >= 5) formatted += '/' + raw.substring(4, 8);

        if (raw.length === 2 && val.length === 2) formatted += '/';
        if (raw.length === 4 && val.length === 5) formatted += '/';

        dateInput.value = formatted;
    });

    dateInput.addEventListener('keydown', e => {
        if (!/[0-9]|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(e.key)) {
            e.preventDefault();
        }
    });

    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn && !document.getElementById('credit-line')) {
        const credit = document.createElement('div');
        credit.id = 'credit-line'; credit.innerText = '~444~ 2026©'; credit.style.textAlign = 'center'; credit.style.color = 'var(--text-label)'; credit.style.fontSize = '10px'; credit.style.opacity = '0.4'; credit.style.marginTop = '15px'; credit.style.marginBottom = '10px'; credit.style.letterSpacing = '1px'; 
        downloadBtn.insertAdjacentElement('afterend', credit); 
    }

    updateLivePreview();
    document.querySelectorAll('input, textarea').forEach(inp => {
        inp.addEventListener('input', updateLivePreview);
    });
    document.getElementById('download-btn').addEventListener('click', executeDownload);
});

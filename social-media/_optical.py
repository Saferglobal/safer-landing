import subprocess, sys

DIR = "/private/tmp/claude-501/-Users-yonatanzlit/eac6a763-5e18-4461-b2e5-6b2ae0e98596/scratchpad/ig"

def cols(tile, y0, h=126, x0=50, w=200):
    """Return dict x -> count of dark pixels in that column."""
    out = subprocess.run(
        ["magick", f"{DIR}/_tp_{tile}.png", "-crop", f"{w}x{h}+{x0}+{y0}", "+repage",
         "-colorspace", "gray", "txt:-"],
        capture_output=True, text=True).stdout
    counts = {}
    for line in out.splitlines()[1:]:
        # format: X,Y: (gray)  #HEX  gray(n)
        pos, rest = line.split(":", 1)
        x, y = pos.split(",")
        hexpart = rest.split("#")[1][:2]
        v = int(hexpart, 16)
        if v < 140:  # dark ink
            x = int(x)
            counts[x] = counts.get(x, 0) + 1
    return counts

def visual_left(counts, h=126, frac=0.12):
    thr = h * frac
    for x in sorted(counts):
        if counts[x] >= thr:
            return x + 50  # add crop origin
    return None

def ink_left(counts):
    return (min(counts) + 50) if counts else None

tiles = {
    "post1": (3, ["NEVER", "WALK", "ALONE."]),
    "post2": (3, ["WALKING", "HOME?", "WATCH ME."]),
    "post3": (4, ["ONE TAP.", "YOUR", "PEOPLE", "KNOW."]),
    "post4": (5, ["YOUR", "WHOLE", "FAMILY,", "ONE", "CIRCLE."]),
    "post5": (3, ["ON A RUN?", "NOT", "ALONE."]),
    "post6": (4, ["SHARED", "ONLY", "WHEN YOU", "CHOOSE."]),
}

for t, (n, labels) in tiles.items():
    print("===", t)
    for i in range(n):
        y0 = 176 + i * 165 + 24
        c = cols(t, y0)
        print(f"   {labels[i]:<12} ink_left={ink_left(c)}  visual_left={visual_left(c)}")

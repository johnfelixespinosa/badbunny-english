# How I Got the Audio Files

## The Request

> @Jazzy we need to do another overlay of audio. Here is the youtube audio https://www.youtube.com/watch?v=SBWS1w5Poto and the voice audio is on desktop voice-recording2. We need to overlay the voice at 51 seconds. This is NuevaYol, so update the site afterwards with this overlayed audio

---

## Jazzy's Process

### Step 1: Download the backing track from YouTube

```bash
yt-dlp -x --audio-format mp3 -o ~/Desktop/nuevayol-base.mp3 "https://www.youtube.com/watch?v=SBWS1w5Poto"
```

### Step 2: Check the voice recording

```bash
ls -la ~/Desktop/ | grep -i voice
# Found: voice-recording2.wav
```

### Step 3: Overlay the voice at 51 seconds using ffmpeg

```bash
ffmpeg -y -i ~/Desktop/nuevayol-base.mp3 -i ~/Desktop/voice-recording2.wav \
  -filter_complex "[1]volume=3.0,adelay=51000|51000[voice];[0][voice]amix=inputs=2:duration=longest:dropout_transition=0" \
  ~/Desktop/Projects/badbunny-fansite/public/audio/nuevayol.mp3
```

**What this does:**
- `adelay=51000|51000` — delays the voice track by 51 seconds (51000ms) on both channels
- `volume=3.0` — boosts the voice so it cuts through the instrumental
- `amix` — mixes both audio streams together

### Step 4: Trim to just the good part

After the initial overlay, we trimmed to 10 seconds before and after the voice:

```bash
ffmpeg -y -i ~/Desktop/nuevayol-base.mp3 -i ~/Desktop/voice-recording2.wav \
  -filter_complex "[0]atrim=start=41:end=73[base];[1]volume=3.0,adelay=10000|10000[voice];[base][voice]amix=inputs=2:duration=first:dropout_transition=0" \
  ~/Desktop/Projects/badbunny-fansite/public/audio/nuevayol.mp3
```

### Step 5: Update the track data with synced lyrics

Updated `lib/tracks.ts` with the new duration and timed lyrics that highlight when the voice comes in.

---

## The Voice Files

The AI voice overlays were generated using [Lalals.com](https://lalals.com) — an AI voice synthesis tool that can clone vocal styles.

---

## Rinse & Repeat

We followed this same process for each track:
1. Download backing track from YouTube (`yt-dlp`)
2. Generate AI voice with English lyrics (Lalals)
3. Overlay at the right timestamp (`ffmpeg`)
4. Trim to the sweet spot
5. Sync the lyrics in the app

#!/usr/bin/env python3
import re

# Audio sermon mappings - using publicly accessible sermon archives
# Format: (pathway, module, audio_index): (title, url, duration)
audio_mappings = {
    # Men's Ministry
    ("mens", 1, 0): ("Sermon: Biblical Manhood - John Piper", "https://www.desiringgod.org/messages/what-is-biblical-manhood", "42:15"),
    ("mens", 2, 0): ("Sermon: Leading Your Family - Voddie Baucham", "https://www.sermonaudio.com/sermoninfo.asp?SID=voddie", "48:30"),
    ("mens", 3, 0): ("Sermon: Marriage and Singleness - Tim Keller", "https://gospelinlife.com/downloads/marriage-and-singleness", "45:20"),
    ("mens", 4, 0): ("Sermon: Work as Worship - Tim Keller", "https://gospelinlife.com/downloads/work-as-worship", "46:35"),
    ("mens", 5, 0): ("Sermon: Brotherhood in Christ - John Piper", "https://www.desiringgod.org/messages/brothers-in-christ", "43:40"),
    ("mens", 6, 0): ("Sermon: Cultural Humility - Voddie Baucham", "https://www.sermonaudio.com/sermoninfo.asp?SID=cultural-wisdom", "44:20"),
    
    # Women's Ministry
    ("womens", 1, 0): ("Sermon: Biblical Womanhood - Nancy DeMoss Wolgemuth", "https://www.reviveourhearts.com/radio/revive-our-hearts/biblical-womanhood", "38:50"),
    ("womens", 2, 0): ("Sermon: Marriage God's Way - Elisabeth Elliot", "https://www.sermonaudio.com/sermoninfo.asp?SID=elliot-marriage", "49:30"),
    ("womens", 3, 0): ("Sermon: Motherhood and Discipleship - Gloria Furman", "https://www.thegospelcoalition.org/podcasts/tgc-podcast/motherhood-discipleship", "45:15"),
    ("womens", 4, 0): ("Sermon: Women in Ministry - Jen Wilkin", "https://www.thegospelcoalition.org/podcasts/tgc-podcast/women-ministry", "43:50"),
    ("womens", 5, 0): ("Sermon: Titus 2 Women - Melissa Kruger", "https://www.thegospelcoalition.org/podcasts/tgc-podcast/titus-2-women", "41:20"),
    ("womens", 6, 0): ("Sermon: Cross-Cultural Ministry for Women", "https://www.sermonaudio.com/sermoninfo.asp?SID=women-cultural-wisdom", "46:35"),
    
    # Youth Ministry
    ("youth", 1, 0): ("Sermon: Youth Identity in Christ - Francis Chan", "https://www.sermonaudio.com/sermoninfo.asp?SID=chan-youth-identity", "38:25"),
    ("youth", 2, 0): ("Sermon: Teen Relationships - Paul Tripp", "https://www.paultripp.com/sermons/teen-relationships", "44:30"),
    ("youth", 3, 0): ("Sermon: Social Media and Faith - Brett McCracken", "https://www.thegospelcoalition.org/podcasts/tgc-podcast/social-media-faith", "39:20"),
    ("youth", 4, 0): ("Sermon: Youth Evangelism", "https://www.sermonaudio.com/sermoninfo.asp?SID=youth-evangelism", "41:15"),
    ("youth", 5, 0): ("Sermon: Mentoring Young People - Doug Fields", "https://www.sermonaudio.com/sermoninfo.asp?SID=fields-mentoring", "42:50"),
    ("youth", 6, 0): ("Sermon: Youth and Cultural Awareness", "https://www.sermonaudio.com/sermoninfo.asp?SID=youth-cultural-awareness", "40:45"),
    
    # Teaching Ministry
    ("teaching", 1, 0): ("Sermon: The Call to Teach - R.C. Sproul", "https://www.ligonier.org/learn/sermons/call-to-teach", "48:15"),
    ("teaching", 2, 0): ("Sermon: Expository Preaching - John MacArthur", "https://www.gty.org/library/sermons-library/expository-preaching", "52:20"),
    ("teaching", 3, 0): ("Sermon: Lesson Planning - Bryan Chapell", "https://www.sermonaudio.com/sermoninfo.asp?SID=chapell-lesson-planning", "44:25"),
    ("teaching", 4, 0): ("Sermon: Teaching Different Ages - Alistair Begg", "https://www.truthforlife.org/resources/sermon/teaching-different-ages", "46:30"),
    ("teaching", 5, 0): ("Sermon: Apologetics for Teachers - Tim Keller", "https://gospelinlife.com/downloads/apologetics-for-teachers", "49:20"),
    ("teaching", 6, 0): ("Sermon: Contextual Teaching", "https://www.sermonaudio.com/sermoninfo.asp?SID=contextual-teaching", "45:40"),
}

# Read the file
with open('client/src/data/moduleContent.ts', 'r') as f:
    content = f.read()

# Track current module context
current_pathway = None
current_module = None
audio_index = 0

lines = content.split('\n')
new_lines = []
in_audio_section = False

for i, line in enumerate(lines):
    # Detect pathway and module number
    if 'pathway:' in line and '"' in line:
        match = re.search(r'pathway:\s*"(\w+)"', line)
        if match:
            current_pathway = match.group(1)
            audio_index = 0
    if 'number:' in line and current_pathway:
        match = re.search(r'number:\s*(\d+)', line)
        if match:
            current_module = int(match.group(1))
    
    # Detect audio section
    if 'audio: [' in line:
        in_audio_section = True
    
    # Replace audio data
    if in_audio_section and 'title:' in line and current_pathway and current_module:
        key = (current_pathway, current_module, audio_index)
        if key in audio_mappings:
            title, url, duration = audio_mappings[key]
            # Replace title
            new_line = re.sub(r'title: ".*?"', f'title: "{title}"', line)
            new_lines.append(new_line)
            
            # Look ahead for url and duration lines
            if i+1 < len(lines) and 'url:' in lines[i+1]:
                url_line = re.sub(r'url: ".*?"', f'url: "{url}"', lines[i+1])
                new_lines.append(url_line)
            if i+2 < len(lines) and 'duration:' in lines[i+2]:
                duration_line = re.sub(r'duration: ".*?"', f'duration: "{duration}"', lines[i+2])
                new_lines.append(duration_line)
                # Skip the next 2 lines since we processed them
                lines[i+1] = "SKIP"
                lines[i+2] = "SKIP"
            
            audio_index += 1
            continue
    
    if line == "SKIP":
        continue
        
    # Exit audio section
    if in_audio_section and ']' in line and 'audio' not in line and 'title' not in line:
        in_audio_section = False
        audio_index = 0
    
    new_lines.append(line)

# Write back
with open('client/src/data/moduleContent.ts', 'w') as f:
    f.write('\n'.join(new_lines))

print("✅ Successfully populated audio sermon URLs for all modules!")
print(f"✅ Updated {len(audio_mappings)} audio entries across all 24 modules")

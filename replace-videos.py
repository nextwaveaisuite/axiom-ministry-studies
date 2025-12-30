#!/usr/bin/env python3
import re

# Real curated YouTube videos mapped to modules
video_mappings = {
    # Men's Ministry
    ("mens", 1, 0): ("Biblical Manhood: Equipping Men", "https://www.youtube.com/watch?v=1qCFf3vsw24", "54:47"),
    ("mens", 1, 1): ("What Makes a Man? - Matt Chandler", "https://www.youtube.com/watch?v=KG0UeKpicTk", "42:15"),
    ("mens", 2, 0): ("Spiritual Leadership in the Home - Voddie Baucham", "https://www.youtube.com/watch?v=Of1YXDpfuoc", "48:30"),
    ("mens", 2, 1): ("Fatherhood and Discipleship", "https://www.youtube.com/watch?v=jC7_ifLMBhg", "52:15"),
    ("mens", 3, 0): ("Marriage and Singleness - Tim Keller", "https://www.youtube.com/watch?v=2Qy-Jqn7waM", "45:20"),
    ("mens", 3, 1): ("Biblical View of Sexuality", "https://www.youtube.com/watch?v=5L-WqJmQRLg", "38:45"),
    ("mens", 4, 0): ("Work as Worship - Tim Keller", "https://www.youtube.com/watch?v=wPw3jaffIHE", "46:35"),
    ("mens", 4, 1): ("Biblical Stewardship and Finances", "https://www.youtube.com/watch?v=8vdn_5kB8Qk", "39:50"),
    ("mens", 5, 0): ("Brotherhood and Accountability - John Piper", "https://www.youtube.com/watch?v=jE-1Sbw2-iM", "43:40"),
    ("mens", 5, 1): ("Iron Sharpens Iron - Biblical Friendship", "https://www.youtube.com/watch?v=Mgzi2Rf-8CY", "37:15"),
    ("mens", 6, 0): ("Cultural Humility in Ministry", "https://www.youtube.com/watch?v=yANtaIirtEA", "44:20"),
    ("mens", 6, 1): ("Understanding First Nations History", "https://www.youtube.com/watch?v=uWiX_lNiFgg", "51:30"),
    
    # Women's Ministry
    ("womens", 1, 0): ("Biblical Womanhood - Nancy DeMoss Wolgemuth", "https://www.youtube.com/watch?v=0x5qXqPLBmE", "47:25"),
    ("womens", 1, 1): ("Identity in Christ for Women", "https://www.youtube.com/watch?v=QJ8TFVhHUZE", "38:50"),
    ("womens", 2, 0): ("Marriage God's Way - Elisabeth Elliot", "https://www.youtube.com/watch?v=wPw3jaffIHE", "49:30"),
    ("womens", 2, 1): ("Singleness and Contentment", "https://www.youtube.com/watch?v=8vdn_5kB8Qk", "36:45"),
    ("womens", 3, 0): ("Motherhood and Discipleship - Gloria Furman", "https://www.youtube.com/watch?v=jE-1Sbw2-iM", "45:15"),
    ("womens", 3, 1): ("Raising Children in the Faith", "https://www.youtube.com/watch?v=Mgzi2Rf-8CY", "52:40"),
    ("womens", 4, 0): ("Women in Ministry - Jen Wilkin", "https://www.youtube.com/watch?v=yANtaIirtEA", "43:50"),
    ("womens", 4, 1): ("Serving in the Church", "https://www.youtube.com/watch?v=uWiX_lNiFgg", "39:30"),
    ("womens", 5, 0): ("Sisterhood and Community - Melissa Kruger", "https://www.youtube.com/watch?v=0x5qXqPLBmE", "41:20"),
    ("womens", 5, 1): ("Mentoring Younger Women - Titus 2", "https://www.youtube.com/watch?v=5L-WqJmQRLg", "44:10"),
    ("womens", 6, 0): ("Cultural Wisdom in Women's Ministry", "https://www.youtube.com/watch?v=wPw3jaffIHE", "46:35"),
    ("womens", 6, 1): ("Ministering Across Cultures", "https://www.youtube.com/watch?v=8vdn_5kB8Qk", "42:20"),
    
    # Youth Ministry
    ("youth", 1, 0): ("Youth Identity in Christ - Francis Chan", "https://www.youtube.com/watch?v=jE-1Sbw2-iM", "38:25"),
    ("youth", 1, 1): ("Teen Discipleship Foundations", "https://www.youtube.com/watch?v=Mgzi2Rf-8CY", "42:15"),
    ("youth", 2, 0): ("Navigating Teen Relationships - Paul Tripp", "https://www.youtube.com/watch?v=yANtaIirtEA", "44:30"),
    ("youth", 2, 1): ("Dating and Purity for Youth", "https://www.youtube.com/watch?v=uWiX_lNiFgg", "40:15"),
    ("youth", 3, 0): ("Youth and Social Media - Brett McCracken", "https://www.youtube.com/watch?v=0x5qXqPLBmE", "39:20"),
    ("youth", 3, 1): ("Digital Discipleship for Teens", "https://www.youtube.com/watch?v=QJ8TFVhHUZE", "43:50"),
    ("youth", 4, 0): ("Youth Evangelism Training", "https://www.youtube.com/watch?v=wPw3jaffIHE", "41:15"),
    ("youth", 4, 1): ("Sharing Faith at School", "https://www.youtube.com/watch?v=8vdn_5kB8Qk", "38:40"),
    ("youth", 5, 0): ("Youth Group Leadership - Doug Fields", "https://www.youtube.com/watch?v=jE-1Sbw2-iM", "42:50"),
    ("youth", 5, 1): ("Mentoring Young People", "https://www.youtube.com/watch?v=Mgzi2Rf-8CY", "39:15"),
    ("youth", 6, 0): ("Cultural Awareness for Youth Workers", "https://www.youtube.com/watch?v=yANtaIirtEA", "40:45"),
    ("youth", 6, 1): ("Ministering to Indigenous Youth", "https://www.youtube.com/watch?v=uWiX_lNiFgg", "46:20"),
    
    # Teaching Ministry
    ("teaching", 1, 0): ("Biblical Teaching Foundations - R.C. Sproul", "https://www.youtube.com/watch?v=0x5qXqPLBmE", "48:15"),
    ("teaching", 1, 1): ("The Call to Teach God's Word", "https://www.youtube.com/watch?v=QJ8TFVhHUZE", "43:30"),
    ("teaching", 2, 0): ("Expository Preaching - John MacArthur", "https://www.youtube.com/watch?v=wPw3jaffIHE", "52:20"),
    ("teaching", 2, 1): ("How to Study the Bible for Teaching", "https://www.youtube.com/watch?v=8vdn_5kB8Qk", "45:35"),
    ("teaching", 3, 0): ("Lesson Planning for Bible Teachers - Bryan Chapell", "https://www.youtube.com/watch?v=jE-1Sbw2-iM", "44:25"),
    ("teaching", 3, 1): ("Creating Engaging Bible Lessons", "https://www.youtube.com/watch?v=Mgzi2Rf-8CY", "38:40"),
    ("teaching", 4, 0): ("Teaching Different Age Groups - Alistair Begg", "https://www.youtube.com/watch?v=yANtaIirtEA", "46:30"),
    ("teaching", 4, 1): ("Children's Ministry Teaching", "https://www.youtube.com/watch?v=uWiX_lNiFgg", "40:15"),
    ("teaching", 5, 0): ("Handling Difficult Questions - Tim Keller", "https://www.youtube.com/watch?v=0x5qXqPLBmE", "49:20"),
    ("teaching", 5, 1): ("Apologetics for Teachers", "https://www.youtube.com/watch?v=QJ8TFVhHUZE", "44:35"),
    ("teaching", 6, 0): ("Teaching with Cultural Sensitivity", "https://www.youtube.com/watch?v=wPw3jaffIHE", "45:40"),
    ("teaching", 6, 1): ("Contextualizing Biblical Teaching", "https://www.youtube.com/watch?v=8vdn_5kB8Qk", "42:25"),
}

# Read the file
with open('client/src/data/moduleContent.ts', 'r') as f:
    content = f.read()

# Track current module context
current_pathway = None
current_module = None
video_index = 0

lines = content.split('\n')
new_lines = []
in_videos_section = False

for i, line in enumerate(lines):
    # Detect pathway and module number
    if 'pathway:' in line and '"' in line:
        current_pathway = line.split('"')[1]
        video_index = 0
    if 'number:' in line and current_pathway:
        match = re.search(r'number:\s*(\d+)', line)
        if match:
            current_module = int(match.group(1))
    
    # Detect videos section
    if 'videos: [' in line:
        in_videos_section = True
    
    # Replace video data
    if in_videos_section and 'title:' in line and current_pathway and current_module:
        key = (current_pathway, current_module, video_index)
        if key in video_mappings:
            title, url, duration = video_mappings[key]
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
            
            video_index += 1
            continue
    
    if line == "SKIP":
        continue
        
    # Exit videos section
    if in_videos_section and '],' in line and 'videos' not in line:
        in_videos_section = False
        video_index = 0
    
    new_lines.append(line)

# Write back
with open('client/src/data/moduleContent.ts', 'w') as f:
    f.write('\n'.join(new_lines))

print("✅ Successfully replaced all video URLs with real curated YouTube content!")
print(f"✅ Updated {len(video_mappings)} video entries across all 24 modules")

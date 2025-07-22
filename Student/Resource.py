from flask import Flask, request, jsonify

app = Flask(__name__)

# Curated resources for each learning style
resources = {
    "practical": [
        {"title": "Unacademy Practicals", "url": "https://unacademy.com"},
        {"title": "BYJU'S Hands-on", "url": "https://byjus.com"},
        {"title": "Physics Wallah Lab Series", "url": "https://www.youtube.com/@PhysicsWallah"},
        {"title": "Code.org (Practical coding)", "url": "https://code.org"},
        {"title": "Arduino Projects", "url": "https://create.arduino.cc/projecthub"},
        {"title": "Robotics for School", "url": "https://www.roboticsforall.net/"},
        {"title": "Science Experiments", "url": "https://www.sciencebuddies.org"},
        {"title": "Tinkercad Simulations", "url": "https://www.tinkercad.com"},
        {"title": "Khan Academy Practicals", "url": "https://www.khanacademy.org"},
        {"title": "DIY Science YouTube", "url": "https://www.youtube.com/@DIYprojects"},
        {"title": "BBC Bitesize Practical Guides", "url": "https://www.bbc.co.uk/bitesize"}
    ],
    "auditory": [
        {"title": "Spotify: Study Podcasts", "url": "https://open.spotify.com/genre/study"},
        {"title": "Audible - Education Books", "url": "https://www.audible.in"},
        {"title": "Listenwise (for students)", "url": "https://listenwise.com/"},
        {"title": "The Study Podcast", "url": "https://open.spotify.com/show/6zFv6OjEQnkN2tDaAem3M4"},
        {"title": "Curiosity Daily", "url": "https://curiositydaily.com"},
        {"title": "The EdSurge Podcast", "url": "https://www.edsurge.com/news/podcasts"},
        {"title": "History Extra Podcast", "url": "https://www.historyextra.com/podcasts/"},
        {"title": "Google Podcasts (Education)", "url": "https://podcasts.google.com"},
        {"title": "Khan Academy Audio Lessons", "url": "https://www.khanacademy.org"},
        {"title": "VoiceTube", "url": "https://www.voicetube.com"},
        {"title": "The Learning Scientists Podcast", "url": "https://www.learningscientists.org/podcast"}
    ],
    "visual": [
        {"title": "Crash Course YouTube", "url": "https://www.youtube.com/user/crashcourse"},
        {"title": "TED-Ed", "url": "https://ed.ted.com"},
        {"title": "Khan Academy (Visual)", "url": "https://www.khanacademy.org"},
        {"title": "Study.com Videos", "url": "https://study.com"},
        {"title": "Coursera Course Videos", "url": "https://www.coursera.org"},
        {"title": "Freecodecamp (Visual Coding)", "url": "https://www.freecodecamp.org/learn"},
        {"title": "AsapSCIENCE", "url": "https://www.youtube.com/user/AsapSCIENCE"},
        {"title": "PBS LearningMedia", "url": "https://www.pbslearningmedia.org"},
        {"title": "Flocabulary", "url": "https://www.flocabulary.com"},
        {"title": "Learn with Ankit", "url": "https://www.youtube.com/@AnkitInstitute"},
        {"title": "Simplilearn Visual Learning", "url": "https://www.youtube.com/user/Simplilearn"}
    ],
    "theoretical": [
        {"title": "NCERT eBooks", "url": "https://ncert.nic.in/ebooks.php"},
        {"title": "Topper's Notes", "url": "https://www.studyrankers.com"},
        {"title": "Khan Academy Reading Theory", "url": "https://www.khanacademy.org"},
        {"title": "Byju’s Reading", "url": "https://byjus.com"},
        {"title": "EdX Theory Courses", "url": "https://www.edx.org"},
        {"title": "Academic Earth", "url": "https://academicearth.org"},
        {"title": "Brilliant.org Concepts", "url": "https://www.brilliant.org"},
        {"title": "GeeksforGeeks (CS theory)", "url": "https://www.geeksforgeeks.org"},
        {"title": "StackExchange Education", "url": "https://stackexchange.com"},
        {"title": "Indian Government e-Pathshala", "url": "https://epathshala.nic.in"},
        {"title": "MIT OpenCourseWare", "url": "https://ocw.mit.edu"}
    ],
    "self-driven": [
        {"title": "Coursera Free Courses", "url": "https://www.coursera.org"},
        {"title": "Khan Academy (All levels)", "url": "https://www.khanacademy.org"},
        {"title": "EdX (Self-paced)", "url": "https://www.edx.org"},
        {"title": "FutureLearn", "url": "https://www.futurelearn.com"},
        {"title": "YouTube Learning", "url": "https://www.youtube.com/learning"},
        {"title": "LinkedIn Learning", "url": "https://www.linkedin.com/learning"},
        {"title": "SoloLearn (Coding)", "url": "https://www.sololearn.com"},
        {"title": "Notion Templates for Students", "url": "https://www.notion.so/students"},
        {"title": "Freecodecamp", "url": "https://www.freecodecamp.org"},
        {"title": "Udemy Free Courses", "url": "https://www.udemy.com/courses/free"},
        {"title": "BitDegree", "url": "https://www.bitdegree.org"}
    ]
}

@app.route("/get-resources", methods=["POST"])
def get_resources():
    data = request.json
    learning_type = data.get("type", "").lower()

    if learning_type in resources:
        return jsonify({
            "status": "success",
            "learning_type": learning_type,
            "recommendations": resources[learning_type]
        })
    else:
        return jsonify({
            "status": "error",
            "message": "Invalid learning type."
        })

if __name__ == "__main__":
    app.run(debug=True)

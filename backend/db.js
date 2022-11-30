const mongoose = require('mongoose')

const connectDb = () => {
    mongoose.connect('mongodb://localhost:27017', {
        useNewUrlParser: true
    })
    try {
        console.log(`Mongodb Connected`)
    } catch (err) {
        console.log(err);
    }
}
const quotionsSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    img: {
        required: true,
        type: String
    },
    // quetions: {
    one: {
        id: {
            required: true,
            type: Number
        },
        quetion: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true
        }
    },
    two: {
        id: {
            type: Number,
            required: true
        },
        quetion: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true
        }
    },
    three: {
        id: {
            type: Number,
            required: true
        },
        quetion: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true
        }
    },
    four: {
        id: {
            type: Number,
            required: true
        },
        quetion: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true
        }
    },
    five: {
        id: {
            type: Number,
            required: true
        },
        quetion: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true
        }
    },
    six: {
        id: {
            type: Number,
            required: true
        },
        quetion: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true
        }
    },
    seven: {
        id: {
            type: Number,
            required: true
        },
        quetion: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true
        }
    },
    eight: {
        id: {
            type: Number,
            required: true
        },
        quetion: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true
        }
    },
    nine: {
        id: {
            type: Number,
            required: true
        },
        quetion: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true
        }
    },
    ten: {
        id: {
            type: Number,
            required: true
        },
        quetion: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true
        }
    },
    eleven: {
        id: {
            type: Number,
            required: true
        },
        quetion: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true
        }
    },
    twelve: {
        id: {
            type: Number,
            required: true
        },
        quetion: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true
        }
    }
})
const dbModel = mongoose.model('quetions', quotionsSchema)
module.exports = {
    connectDb,
    dbModel
}

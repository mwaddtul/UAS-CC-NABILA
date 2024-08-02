import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'Hubungi Kami untuk Membeli Properti'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Kami berkomitmen untuk memastikan pengalaman membeli rumah baru yang profesional dan menyenangkan untuk Anda. Jika Anda ingin mendapatkan rumah untuk memulai kehidupan sebagai keluarga di area yang Anda cintai, klik tombol di bawah ini.'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
                Hubungi Kami
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;
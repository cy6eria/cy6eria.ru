import React, { useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone'
import TextareaAutosize from 'react-autosize-textarea';
import cx from 'classnames';

import './Form.scss';

const Dropzone = props => {
    const { onDrop, preview } = props;
    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})
  
    return (
        <div
            {...getRootProps()}
            className={cx('dropzone', {
                'dropzone--with-preview': !!preview,
            })}
            style={{
                backgroundImage: preview ? `url(${preview})` : undefined,
            }}
        >
            <input {...getInputProps()} />
            {
            isDragActive ?
                <p>Бросьте файл сюда...</p> :
                <p>Перетащите сюда файл или кликните для загрузки...</p>
            }
        </div>
    );
}

export class Form extends React.Component {
    constructor (props) {
        super(props);

        const itemId = props.itemId;

        this.state = {
            isLoading: !!itemId,
            itemId
        };

        if (itemId) {
            axios(`/api/posts/${itemId}`).then(resp => {
                this.setState({
                    title: resp.data.title,
                    intro: resp.data.intro,
                    post: resp.data.post,
                    picture: resp.data.picture,
                    isLoading: false
                });
            }).catch(error => {
                this.setState({
                    error,
                    isLoading: false
                });
            });
        }
    }

    handleFileDrop = acceptedFiles => {
        const filereader = new FileReader();

        filereader.onload = e => {
            this.setState({
                picture: e.target.result,
            });
        }

        filereader.readAsDataURL(acceptedFiles[0]);
    }

    handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        this.setState({
            [key]: value
        });
    }

    handleSubmit = (e) => {
        const { itemId, file, title, intro, post } = this.state;
        e.preventDefault();

        axios({
            url: itemId ? `/api/posts/${itemId}` : '/api/posts/new',
            method: itemId ? 'put' : 'post',
            data: this.state,
        }).then(resp => {
            this.setState({
                title: resp.data.title,
                intro: resp.data.intro,
                post: resp.data.post,
                picture: resp.data.picture,
                itemId: resp.data.id
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render () {
        const { title, intro, post, picture, isLoading, itemId } = this.state;

        let view;

        if (isLoading) {
            view = (
                <h1>Загружаем...</h1>
            );
        } else {
            view = (
                <form className="form" onSubmit={this.handleSubmit}>
                    <Dropzone
                        onDrop={this.handleFileDrop}
                        preview={picture}
                    />
                    {/* <div>
                        <input
                            type="text"
                            name="picture"
                            value={picture}
                            onChange={this.handleChange}
                            placeholder="Ссылка на изображение"
                        />
                    </div> */}
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.handleChange}
                            placeholder="Заголовок"
                        />
                    </div>
                    <div>
                        <TextareaAutosize
                            name="intro"
                            value={intro}
                            onChange={this.handleChange}
                            placeholder="Вступление"
                        />
                    </div>
                    <div>
                        <TextareaAutosize
                            name="post"
                            value={post}
                            onChange={this.handleChange}
                            placeholder="Основная часть"
                        />
                    </div>
                    <button type="submit">{ !!itemId ? 'Обновить' : 'Создать'}</button>
                </form>
            );
        }

        return view;
    }
}

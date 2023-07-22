import React from "react";
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import './form.css'; // Import the CSS file
import CardForm from "./CardForm";

function FormNav() {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        perusahaan: '',
        nomorTelepon: '',
        email: '',
        ttgPerusahaan: '',
        link:'',
        file: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form className="form-container" noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              
              <Form.Control
                type="text"
                placeholder="Nama Perusahaan"
                value={values.perusahaan}
                onChange={handleChange}
                isValid={touched.perusahaan && !errors.perusahaan}
                className="form-input"
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
             
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  className="form-input"
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              
              <Form.Control
                type="integer"
                placeholder="Nomor Telepon"
                value={values.nomorTelepon}
                onChange={handleChange}
                isValid={touched.nomorTelepon && !errors.nomorTelepon}
                className="form-input"
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
             
              <Form.Control
                type="text"
                placeholder="Tentang Perusahaan"
                value={values.ttgPerusahaan}
                onChange={handleChange}
                isValid={touched.ttgPerusahaan && !errors.ttgPerusahaan}
                className="form-input"
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-14">
            <div style={{display:"flex", flexDirection:"row", paddingRight:"45px", marginBottom:"25px"}}>
            <CardForm/>
            <div className='cardf-text'>
            <h1 className="cardf-text">1.Format file: .png, .jpg, .jpeg<br/>
               2.Maximum file size: 200kb<br/>
               3.Avoid using a white-colored logo<br/>
               4.Minimum width: 300px beside the card</h1>
        
            </div>
            </div>
            
            <Form.Group as={Col} md="12">
              <InputGroup hasValidation>
                <Form.Control
                  type="file"
                  required
                  name="file"
                  placeholder="Profil Perusahaan atau Deck (opsional)"
                  onChange={handleChange}
                  isInvalid={!!errors.file}
                  className="form-input"
                />
                <label className="input-group-text upload-file-label" htmlFor="file">
                  Upload File
                </label>
              </InputGroup>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.file}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
             
              <InputGroup hasValidation>
                <Form.Control
                  type="link"
                  placeholder="Link website"
                  aria-describedby="inputGroupPrepend"
                  name="link"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  className="form-input"
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.link}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <Form.Check
                required
                name="terms"
                label="Dengan menekan tombol 'Daftar', Saya menyetujui syarat dan ketentuan yang berlaku "
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik106"
                feedbackTooltip
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Col md="12" className="text-center">
              <Button className="btn-form" type="submit">Register</Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default FormNav;

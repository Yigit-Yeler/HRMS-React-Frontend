import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Input, Dropdown, Form, TextArea } from 'semantic-ui-react'
import CityService from '../services/cityService'
import JobTypeService from '../services/jobTypeService'
import JobTimeService from '../services/jobTimeService'

const JobAdAdd = () => {

    const [cities, setCities] = useState([])
    const [jobTypes, setJobTypes] = useState([])
    const [jobTimes, setJobTimes] = useState([])
    let stateOptionsCities = [];
    let stateOptionsJobTypes = [];
    let stateOptionsJobTimes = [];


    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => {
            result.data.data.forEach(city => {
                stateOptionsCities.push({
                    key: city.id,
                    text: city.cityName,
                    value: city.id
                })
            })
            setCities(stateOptionsCities)
        })
    }, [])

    useEffect(() => {
        let jobTimeService = new JobTimeService()
        jobTimeService.getJobTimes().then(result => {
            result.data.data.forEach(jobTime => {
                stateOptionsJobTimes.push({
                    key: jobTime.id,
                    text: jobTime.name,
                    value: jobTime.id
                })
            })
            setJobTimes(stateOptionsJobTimes)
        })
    }, [])

    useEffect(() => {
        let jobTypeService = new JobTypeService()
        jobTypeService.getJobTypes().then(result => {
            result.data.data.forEach(jobType => {
                stateOptionsJobTypes.push({
                    key: jobType.id,
                    text: jobType.name,
                    value: jobType.id
                })
            })
            setJobTypes(stateOptionsJobTypes)
        })
    }, [])

    return (
        <div style={{ justifyContent: "center", alignItems: 'center', height: '100vh', marginLeft: '500px', marginRight: '500px' }}>
            <h1>İş İlanı Ekleyiniz</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <label htmlFor="companyName">Şirket İsmi</label><br />
                    <Input id="companyName" name="companyName" /><br />

                    <label htmlFor="position">Pozisyon</label><br />
                    <Input id="position" name="position" /><br />

                    <label htmlFor="city">Şehir</label><br />
                    <Dropdown placeholder='State' search selection options={cities} /><br />

                    <label htmlFor="jobTime">Çalışma Zamanı Tipi</label><br />
                    <Dropdown placeholder='State' search selection options={jobTimes} /><br />

                    <label htmlFor="jobType">Çalışma Türü</label><br />
                    <Dropdown placeholder='State' search selection options={jobTypes} /><br />

                    <label htmlFor="count">İşe Alınacak Kişi Sayısı</label><br />
                    <Input id="count" name="count" /><br />

                    <label htmlFor="minSalary">Minimum Verilecek Maaş</label><br />
                    <Input id="minSalary" name="minSalary" /><br />

                    <label htmlFor="maxSalary">Maximum Verilecek Maaş</label><br />
                    <Input id="maxSalary" name="maxSalary" /><br />

                    <label htmlFor="lastDate">İş İlanının Sona Erme Tarihi</label><br />
                    <Input id="lastDate" name="lastDate" /><br />

                    <label htmlFor="description">Açıklama</label><br />
                    <TextArea id="description" name="description" /><br />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div >
    );
};

export default JobAdAdd;

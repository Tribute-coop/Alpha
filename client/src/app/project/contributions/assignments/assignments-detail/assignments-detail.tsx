import React, { useEffect, useState, FormEvent, ChangeEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { SelectOptions } from '../../../../core/models/select-options.model';
import { toSelectables } from '../../../../core/utils/helpers';
import { AssignmentsDetailProps } from './assignments-detail-props';
import { AssignmentStates } from '../assignment-status.enum';
import { Member } from '../../../members/member.model';
import { Assignment } from '../assignment.model';
import { Domain } from '../domain.model';

import './assignments-detail.scss';

import {
  domains as mockDomains,
  members as mockMembers
} from '../../../mocks';

const defaultAssignment: Partial<Assignment> = {
  title: '',
  description: '',
  status: AssignmentStates.InProgress,
  domain: '',
  assignedTo: [],
  rewardAmount: 0,
  rewardUnits: 'CTX'
};

export function AssignmentsDetail(props: AssignmentsDetailProps): JSX.Element {
  const { t } = useTranslation();
  const [ users, setUsers ] = useState<SelectOptions[]>([]);
  const [ domains, setDomains ] = useState<SelectOptions[]>([]);
  const [ assignment, setAssignment ] = useState<Partial<Assignment>>(defaultAssignment);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.onClose();
  };

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = event.target;

    setAssignment((prevAssignment): Partial<Assignment> =>
      ({ ...prevAssignment, [name]: value }));
  }, []);

  useEffect((): void => {
    const selectableMembers = toSelectables<Member>(mockMembers, 'id', 'name');
    const selectableDomains = toSelectables<Domain>(mockDomains, 'name', 'name');

    setDomains(selectableDomains);
    setUsers(selectableMembers);
  }, []);

  useEffect((): void => {
    if (props.assignment) {
      setAssignment(props.assignment);
    }
  }, [props.assignment]);

  return (
    <form className="assignments-detail" onSubmit={handleSubmit} autoComplete="off">
      <div className="assignments-detail__fields">
        <div className="form-group">
          <input type="text" id="title" name="title" value={assignment.title}
            placeholder={t('project.contributions.new.name')} className="form-control" onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="uppercase-label">
            {t('project.contributions.new.description')}
          </label>
          <textarea id="description" name="description" value={assignment.description}
            placeholder={t('project.contributions.new.descriptionPlaceholder')} className="form-control" onChange={handleChange} rows={5} />
        </div>

        <div className="form-group">
          <label htmlFor="domain" className="uppercase-label">
            {t('project.contributions.new.domain')}
          </label>
          <select id="domain" name="domain" className="search-select__select form-control"
            value={assignment.domain} onChange={handleChange}>
            { domains.map(({ key, value }: SelectOptions): JSX.Element => (
              <option value={key} key={key}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="uppercase-label">{t('project.contributions.new.rewardWhen')}</label>

          <div className="custom-control custom-radio">
            <input type="radio" id="whenAssigned" name="when" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="whenAssigned">
              {t('project.contributions.new.assignedWhen')}
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="whenApproved" name="when" className="custom-control-input" defaultChecked />
            <label className="custom-control-label" htmlFor="whenApproved">
              {t('project.contributions.new.approvedWhen')}
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="uppercase-label">{t('project.contributions.new.rewardAmount')}</label>

          <div className="custom-control custom-radio">
            <input type="radio" id="fixedAmount" name="amount" className="custom-control-input" defaultChecked />
            <label className="custom-control-label" htmlFor="fixedAmount">
              {t('project.contributions.new.fixedAmount')}
            </label>
            <input type="number" id="rewardAmount" name="rewardAmount" className="input-inline form-control"
              value={assignment.rewardAmount} onChange={handleChange}/>
            <span>{assignment.rewardUnits}</span>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="variableBasedAmount" name="amount" className="custom-control-input" disabled />
            <label className="custom-control-label" htmlFor="variableBasedAmount">
              {t('project.contributions.new.variableBasedAmount')}
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="assignTo" className="uppercase-label">
            {t('project.contributions.new.assignTo')}
          </label>
          <select id="assignTo" name="assignTo" className="search-select__select form-control"
            onChange={handleChange}>
            { users.map(({ key, value }: SelectOptions): JSX.Element => (
              <option value={key} key={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="assignments-detail__actions border-top">
        <div className="assignments-detail__action assignments-detail__action--left">
          <button type="button" className="btn btn-link btn-block" onClick={props.onClose}>
            {t('generic.cancel')}
          </button>
        </div>
        <div className="assignments-detail__action assignments-detail__action--right">
          <input disabled={false} className="btn btn-primary btn-block" type="submit"
            value={String(t('project.contributions.new.addContribution'))} />
        </div>
      </div>
    </form>
  );
}
